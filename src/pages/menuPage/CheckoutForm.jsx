import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import {  FaAmazonPay, FaPaypal } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useTheme } from "../../hooks/ThemeContext";
import { MdPayment } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const CheckoutForm = ({price, cart}) => {
  const { isDarkMode } = useTheme();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setcardError] = useState('');
  const [clientSecret, setClientSecret] = useState("");

  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  const navigate = useNavigate();

  console.log(user.email)

  useEffect(() => {
    if (typeof price !== 'number' || price < 1) {
      console.error('Invalid price value. Must be a number greater than or equal to 1.');
      return;
    }
  
    axiosSecure.post('/create-payment-intent', { price })
      .then(res => {
        console.log(res.data.clientSecret);
        console.log(price);
        setClientSecret(res.data.clientSecret);
      })
  }, [price, axiosSecure]);

  // handleSubmit btn click
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // console.log('card: ', card)
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setcardError(error.message);
    } else {
      // setcardError('Success!');
      // console.log('[PaymentMethod]', paymentMethod);
    }

    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'anonymous',
            email: user?.email || 'unknown'
          },
        },
      },
    );

    if(confirmError){
      console.log(confirmError)
    }

    console.log('paymentIntent', paymentIntent)

    if(paymentIntent.status ==="succeeded") {
      const transitionId =paymentIntent.id;
      setcardError(`Your transitionId is: ${transitionId}`)

      // save payment info to server
      const paymentInfo ={email: user.email, transitionId: paymentIntent.id, price, quantity: cart.length,
        status: "order pending", itemsName: cart.map(item => item.name), cartItems: cart.map(item => item._id), menuItems: cart.map(item => item.menuItemId)}

      // send payment info
      axiosSecure.post('/payments', paymentInfo)
      .then( res => {
        console.log(res.data)
        if(res.data){
          alert(`Payment info sent successfully!`)
          navigate('/order')
        }
      })
    }


  };

   const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  const cartSubtotal = cart.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  const orderTotal = cartSubtotal;
  return (
    <div className="flex flex-col sm:flex-row justify-start items-start gap-8">
      {/* left side */}
      <div className={`md:w-1/2 space-y-5 w-full bg-indigo-100 card shrink-0 max-w-sm shadow-2xl px-4 py-8 ${isDarkMode ?'dark border' :''}`}>
        <h4 className="text-lg font-bold text-gray">Order Summary<span><TbTruckDelivery /></span></h4>
        <p>Total Price:<span className="font-bold"> ₹{orderTotal.toFixed(2)}</span></p>
        <p>
          Number of Items:
          <span className="font-bold"> {cart.length}</span>
        </p>
      </div>
       {/* right side */}
      <div className={`md:w-1/3 w-full space-y-5 bg-purple-100  card shrink-0 max-w-sm shadow-2xl px-4 py-8 ${isDarkMode ? 'dark border' : ''}`}>
        <h4 className="text-lg font-bold text-gray text-center">Process your Payment</h4>
        <span className="font-medium">Credit/Debit Card<sub className="text-primary"><FaAmazonPay/></sub></span>
        {/* stripe form */}
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="btn bg-primary mt-5 w-full text-white"
        >
          Pay <MdPayment/>
        </button>
        </form>
      {cardError ? <p className="text-red text-xs italic font-bold">{cardError}</p> : ''}
      {/* paypal */}
      <div className="mt-5 text-center">
      <hr />
      <button
          type="submit"
    
          className="btn  btn-sm mt-5 bg-orange-500 text-white"
        >
         <FaPaypal /> Pay with Paypal
        </button>
      </div>
      </div>
    </div>
  );
};

export default CheckoutForm;

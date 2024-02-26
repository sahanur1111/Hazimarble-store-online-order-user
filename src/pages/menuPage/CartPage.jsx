import React, { useContext, useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";
import {Link} from 'react-router-dom'
import axios from "axios";
import { useTheme } from "../../hooks/ThemeContext";
import empty from "/cart.png";
import { TypeAnimation } from "react-type-animation";

const CartPage = () => {
  const { isDarkMode } = useTheme();
  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();
  const [cartItems, setCartItems] = useState([]);
  // console.log(cartItems)

  // Calculate the total price for each item in the cart
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };
  // Handle quantity increase
  const handleIncrease = async (item) => {
    try {
      const response = await fetch(`https://marble-store-app.onrender.com/carts/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: item.quantity + 1 }),
      });

      if (response.ok) {
        const updatedCart = cartItems.map((cartItem) => {
          if (cartItem.id === item.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            };
          }
          return cartItem;
        });
        await refetch();
        setCartItems(updatedCart);
      } else {
        console.error("Failed to update quantity");
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };
  // Handle quantity decrease
  const handleDecrease = async (item) => {
    if (item.quantity > 1) {
      try {
        const response = await fetch(
          `https://marble-store-app.onrender.com/carts/${item._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ quantity: item.quantity - 1 }),
          }
        );

        if (response.ok) {
          const updatedCart = cartItems.map((cartItem) => {
            if (cartItem.id === item.id) {
              return {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              };
            }
            return cartItem;
          });
          await refetch();
          setCartItems(updatedCart);
        } else {
          console.error("Failed to update quantity");
        }
      } catch (error) {
        console.error("Error updating quantity:", error);
      }
    }
  };

  // Calculate the cart subtotal
  const cartSubtotal = cart.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  // Calculate the order total
  const orderTotal = cartSubtotal;
  // console.log(orderTotal)

  // delete an item
  const handleDelete =   (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://marble-store-app.onrender.com/carts/${item._id}`).then(response => {
          if (response) {
            refetch();
             Swal.fire("Deleted!", "Your file has been deleted.", "success");
           }
        })
        .catch(error => {
          console.error(error);
        });
      }
    });
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* banner */}
      <div className={`bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100% ${isDarkMode ? "dark" : ""}`}>
        <div className="py-28 flex flex-col items-center justify-center">
          {/* content */}
          <div className=" text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Items Added to The<span className="text-green"> Cart</span>
            </h2>
          </div>
        </div>
      </div>

      {/* cart table */}

      {
        (cart.length > 0) ? <div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-green text-white rounded-sm">
                <tr>
                    <th>SL No.</th>
                    <th>Image</th>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove Item</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="font-medium">{item.name}</td>
                    <td className="flex">
                      <button
                        className="btn btn-xs"
                        onClick={() => handleDecrease(item)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={() => console.log(item.quantity)}
                        className={`w-10 mx-2 text-center overflow-hidden appearance-none ${isDarkMode ? "dark" : ""}`}
                      />
                      <button
                        className="btn btn-xs"
                        onClick={() => handleIncrease(item)}
                      >
                        +
                      </button>
                    </td>
                    <td>₹{calculateTotalPrice(item).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-sm border-none text-red bg-transparent"
                        onClick={() => handleDelete(item)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row justify-between items-start my-12 gap-8">
          {/* customer details */}
          <div className={`md:w-1/3 w-full space-y-5  card shrink-0 max-w-sm shadow-2xl bg-indigo-50 px-4 py-8 ${isDarkMode ? 'dark border' : ''}`}>
            <h3 className="text-lg font-semibold text-gray">Customer Details</h3>
            <p>Name: <span className="font-bold"> {user?.displayName || "None"}</span></p>
            <p>Email:<span className=" font-bold"> {user?.email}</span></p>
            <p>
              User_id: <span className="text-sm">{user?.uid}</span>
            </p>
          </div>
          {/* shoping details */}
          <div className={`md:w-1/3 space-y-5 w-full card shrink-0 max-w-sm shadow-2xl bg-indigo-50 px-4 py-8 ${isDarkMode ? 'dark border' : ''}`}>
            <h3 className="text-lg font-semibold text-gray">Shopping Details</h3>
            <p>Total Items: <span className="font-bold"> {cart.length}</span></p>
            <p>
              Total Price:{" "}
              <span id="total-price" className="font-bold">₹{orderTotal.toFixed(2)}/-</span>
            </p>
            <div className="card-actions justify-end">
            <Link to="/process-checkout" className="btn btn-md bg-primary text-white px-8 py-1">
              Buy Now
            </Link>
            </div>
          </div>
        </div>
      </div> : (
        <div className="text-center font-bold">
          <TypeAnimation
            sequence={["Cart is empty. Please add products."]}
            speed={70}
            loop
          />
          <div className="flex justify-center items-center h-screen font-bold gap-5">
            <Link to="/menu">
              <button className="btn bg-green text-white mt-3 gap-9 font-bold py-2 px-4 rounded-full">
                Back to Products
              </button>
            </Link>
            <img
              src={empty}
              alt=""
              className="h-40 w-40 md:h-60 md:w-60 lg:h-80 lg:w-80 object-cover"
            />
          </div>
        </div>
      )}
    </div>
      
  );      
  
  };
  


export default CartPage;

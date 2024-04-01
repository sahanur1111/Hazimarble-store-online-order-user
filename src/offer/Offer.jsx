import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../public/images/home/banner.png";
import img2 from "../../public/images/home/banner2.png";

const Offer = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={2000}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
        <div>
          <img src={img2} alt="Item3" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Offer
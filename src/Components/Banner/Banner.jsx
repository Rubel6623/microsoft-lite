import React from "react";
import "./banner.css";
import { HiChevronRight } from "react-icons/hi";
import Carousel from 'react-bootstrap/Carousel';
import ProductCategory from "../ProductCategory/ProductCategory ";

const Banner = () => {
  return (
    <div>
      <div>
        <h6 className="nav-title text-white">
          Congratulate and celebrate your grad with tech that’s as impressive as
          they are. Shop gift ideas
        </h6>
      </div>

      <Carousel variant="dark" className="mb-5">
      <Carousel.Item className="banner-img">
        <img
          className="w-100"
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-M365-Icon-Bounce-Word-Merch:VP3-1083x600"
          alt="First slide"
        />
        <Carousel.Caption  className="text-start mb-5 pb-5">
          <div className="
          ">
          <h2>Microsoft 365</h2>
          <p className="banner-text">Turn your ideas into reality, stay safer online and off, and focus on what matters most with Microsoft 365 apps</p>
          </div>
          <div className="d-flex">
          <button className="btn-book text-white">For 1 Person</button>
           <a className="mt-2 text-white" href="#">For up to 6 People <HiChevronRight></HiChevronRight></a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="banner-img">
        <img
          className="d-block w-100 h-50"
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Test-Surface-Pro-9-Platinum-Attract:VP3-1083x600"
          alt="Second slide"
        />
        <Carousel.Caption className="slide-card text-start mb-5 pb-5">
          <div className="">
          <h2>Save up to $300 on Surface Pro 9</h2>
          <p className="banner-text">The tablet flexibility you want and the laptop performance you need—all in one ultra-portable device. Offer ends 5/21.</p>
          </div>
          <button className="btn-book text-white">Shop Surface Pro 9</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <ProductCategory></ProductCategory>
    </div>
  );
};

export default Banner;

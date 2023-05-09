import React from "react";
import './SliderIno.css'
import { Carousel } from "react-bootstrap";
import { FaFacebookF,FaTwitter,FaLinkedin} from "react-icons/fa";
import { HiArrowSmallUp } from "react-icons/hi2";


const SliderIno = () => {
  return (
    <div className="w-75 mx-auto">
      <Carousel variant="dark" className="mb-5">
        <Carousel.Item className="banner-img">
          <img
            className="d-block h-100"
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Black-History-Month-Inclusion-is-Innovation-FY23:VP5-1920x600"
            alt="Second slide"
          />
          <Carousel.Caption className="slide-card text-start mb-5 pb-5">
            <div className="">
              <div className="">
                <h2>Celebrating the Asian community</h2>
                <p className="banner-text">
                This Asian American and Pacific Islander Heritage Month, explore employee stories—plus learn how to engage all year long.
                </p>
              </div>
              <button className="btn-book text-white">
              Read their stories
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="banner-img">
          <img
            className="d-block h-100"
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-MSCOM-Gamechangers-Atlantic-Track-Club-kid:VP5-1920x600"
            alt="Second slide"
          />
          <Carousel.Caption className="slide-card text-start mb-5 pb-5">
            <div className="">
              <div className="">
                <h2>Make way for the Game Changers</h2>
                <p className="banner-text">
                Women across sports are using Microsoft technology and data to break new ground—and pave the way for future athletes, innovators, and leaders.
                </p>
              </div>
              <button className="btn-book text-white">
              Learn more about Game Changers
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

        <div className="d-flex mb-5">
            <div className="d-flex gap-4 flex-grow-1">
            <p className="">Follow Microsoft</p>
            <FaFacebookF className="fs-5 mt-1"></FaFacebookF>
            <FaTwitter className="fs-5 mt-1"></FaTwitter>
            <FaLinkedin className="fs-5 mt-1"></FaLinkedin>
            </div>
            <div>
            <button className="btn-back"> <HiArrowSmallUp></HiArrowSmallUp> Bact to top</button>
            </div>
        </div>

    </div>
  );
};

export default SliderIno;

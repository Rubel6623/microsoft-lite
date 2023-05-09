import React from "react";
import { HiChevronRight } from "react-icons/hi";

const CardBusiness = () => {
  return (
    <div>
        <h1 className="ms-5 ps-2 mb-3">For business</h1>
        <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 ms-5 me-5 mb-5">
      <div className="col">
        <div className="card h-100">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-5-LIfestyle-M2?wid=380&hei=213&fit=crop"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Save up to $250 on Surface Laptop 5 for Business</h5>
            <p className="card-text">
            Lightning-fast performance, built-in security and sleek portability designed for your small business. Offer ends 5/31.
            </p>
          </div>
          <a className="ms-3" href="#">
            Shop Now <HiChevronRight></HiChevronRight>
          </a>
        </div>
      </div>

      <div className="col">
        <div className="card h-100">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-365-Copilot?wid=380&hei=213&fit=crop"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Microsoft 365 Copilot</h5>
            <p className="card-text">
            Discover a new way to work with next-gen AI embedded in the Microsoft 365 apps you use every day.
            </p>
          </div>
          <a className="ms-3" href="#">
          Learn more about Microsoft 365 Copilot <HiChevronRight></HiChevronRight>
          </a>
          <a className="ms-3 mt-2" href="#">
          Explore Microsoft 365 for Business <HiChevronRight></HiChevronRight>
          </a>
        </div>
      </div>

      <div className="col">
        <div className="card h-100">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Windows-11-Business?wid=380&hei=213&fit=crop"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
            Windows 11 for business
            </h5>
            <p className="card-text">
            Designed for hybrid work. Powerful for employees. Consistent for IT. Secure for all.
            </p>
          </div>
          <a className="ms-3" href="#">
          Learn more <HiChevronRight></HiChevronRight>
          </a>
        </div>
      </div>

      <div className="col">
        <div className="card h-100">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-Microsoft-Teams-Commercial?wid=380&hei=213&fit=crop"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
            Get Microsoft Teams for free
            </h5>
            <p className="card-text">
            Online meetings, chat, and shared cloud storage—all in one place.
            </p>
          </div>
          <a className="ms-3" href="#">
          Sign up for free<HiChevronRight></HiChevronRight>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardBusiness;

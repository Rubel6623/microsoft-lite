import React from "react";
import { HiChevronRight } from "react-icons/hi";

const ProductCart = () => {
  return (
    <div class="row row-cols-1 row-cols-md-4 g-4 ms-5 me-5 mb-5">

      <div class="col">
        <div class="card h-100">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Studio-01-CP?wid=297&hei=167&fit=crop"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Surface Laptop Studio</h5>
            <p class="card-text">
              Flex your creative muscle on the most powerful Surface Laptop. Now
              available with Windows 11.
            </p>
          </div>
          <a className="ms-3" href="#">Shop Now <HiChevronRight></HiChevronRight></a>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Test-Surface-Laptop-5-Sandstone-02?wid=297&hei=167&fit=crop"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Save up to $300 on Surface Laptop 5</h5>
            <p class="card-text">
              Sophisticated style and multitasking speed powered by 12th Gen
              Intel® Core. Offer ends 5/29.
            </p>
          </div>
        <a className="ms-3" href="#">Shop Surface Laptop 5 <HiChevronRight></HiChevronRight></a>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Xbox-Series-S-Star-Wars-Jedi-Survivor-Bundle?wid=297&hei=167&fit=crop"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">
              Buy an Xbox Series S, save $35 on Star Wars Jedi: Survivor™
            </h5>
            <p class="card-text">
              For a limited time, save when you add Star Wars Jedi: Survivor™
              Deluxe or Standard Edition to your Xbox Series S purchase.
            </p>
          </div>
          <a className="ms-3" href="#">Shop Xbox Series S  <HiChevronRight></HiChevronRight></a>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <img
            src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-Build-2023-Magenta?wid=297&hei=167&fit=crop"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">
              Join Microsoft Build—digitally or in person
            </h5>
            <p class="card-text">
              This May 23-25, engage in interactive, discussion-based activities
              in real time while connecting with and learning from experts in
              the developer community.
            </p>
          </div>
        <a className="ms-3" href="#">Register today for Microsoft Build <HiChevronRight></HiChevronRight></a>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;

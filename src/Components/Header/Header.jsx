import React from "react";
import "./Header.css";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineSearch, HiOutlineShoppingCart } from "react-icons/hi";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid mx-5">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/512px-Microsoft_logo_%282012%29.svg.png?20230221160917"
          alt=""
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                MicroSoft 365
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#">
                Terms
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active " href="#">
                Windows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active " href="#">
                Surface
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active " href="#">
                Xbox
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active " href="#">
                Deals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active " href="#">
                Small Business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active " href="#">
                Support
              </a>
            </li>
          </ul>

          <form className="d-flex">
            <ul className="nav-item pe-4 mt-3">
              <a
                className="nav-link dropdown-toggle h-50 my-auto"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                All Microsoft
              </a>
            </ul>
            <HiOutlineSearch className="h-50 my-auto me-2 ms-4 fs-3"></HiOutlineSearch>
            <HiOutlineShoppingCart className="h-50 my-auto me-2 ms-4 fs-3"></HiOutlineShoppingCart>
            <FaRegUserCircle className="h-50 my-auto me-2 ms-4 fs-3"></FaRegUserCircle>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;

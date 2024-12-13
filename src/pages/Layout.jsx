import { Outlet, Link } from "react-router-dom";
import "../App.css";
import travlo from "../assets/images/travlo_logo.png";
import Footer from "./Footer";
import { useState } from "react";

const Layout = () => {
  const [activeLink, setActiveLink] = useState("/");

  return (
    <>
      <nav className="nav">
        <img
          src={travlo}
          alt="Travlo Logo"
          width={100}
          height={100}
          className="logo"
        />
        <ul className="header">
          <li
            style={{
              backgroundColor: activeLink === "/" ? "#1F7E7B" : "transparent",
            }}
          >
            <Link
              to="/"
              style={{ color: activeLink === "/" ? "white" : "black" }}
              onClick={() => setActiveLink("/")}
            >
              Home
            </Link>
          </li>
          <li
            style={{
              backgroundColor:
                activeLink === "/booking" ? "#1F7E7B" : "transparent",
            }}
          >
            <Link
              to="/booking"
              style={{ color: activeLink === "/booking" ? "white" : "black" }}
              onClick={() => setActiveLink("/booking")}
            >
              Booking
            </Link>
          </li>
          <li
            style={{
              backgroundColor:
                activeLink === "/contact" ? "#1F7E7B" : "transparent",
            }}
          >
            <Link
              to="/contact"
              style={{ color: activeLink === "/contact" ? "white" : "black" }}
              onClick={() => setActiveLink("/contact")}
            >
              Contact
            </Link>
          </li>
          <li
            style={{
              backgroundColor:
                activeLink === "/about" ? "#1F7E7B" : "transparent",
            }}
          >
            <Link
              to="/about"
              style={{ color: activeLink === "/about" ? "white" : "black" }}
              onClick={() => setActiveLink("/about")}
            >
              About Us
            </Link>
          </li>
          <li
            style={{
              backgroundColor:
                activeLink === "/location" ? "#1F7E7B" : "transparent",
            }}
          >
            <Link
              to="/location"
              style={{ color: activeLink === "/location" ? "white" : "black" }}
              onClick={() => setActiveLink("/location")}
            >
              Location
            </Link>
          </li>
        </ul>
        <div className="profile-box">
          <div className="profile-item">
            <img
              src="path-to-profile-image.jpg"
              alt=""
              width={40}
              height={40}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                border: "1px solid #1F7E7A",
              }}
            />
            <h6> Welcome, Guest</h6>
          </div>

          <div className="profile-content">
            <a href="#">View Profile</a>
            <a href="#">Booking</a>
            <a href="#">Signin/Signup</a>
          </div>
        </div>
      </nav>

      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

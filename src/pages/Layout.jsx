import { Outlet, Link } from "react-router-dom";
import '../App.css';
import travlo from '../assets/images/travlo_logo.png';
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <nav className="nav">
          <img src={travlo} alt="Travlo Logo" width={100} height={100} className="logo"/>
        <ul className="header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/location">Location</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;
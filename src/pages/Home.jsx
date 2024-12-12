import React from "react";
import banner from "../assets/images/banner.jpeg";
import "../App.css";
import hotel from "../assets/images/service/hotel.jpeg";
import flight from "../assets/images/service/flight_booking.png";
import resort from "../assets/images/service/resort.jpeg";
import villa from "../assets/images/service/villa.jpeg";

const Home = () => {
  return (
    <>
      <img src={banner} className="banner" />
      <p className="banner-text">
        Discover the new places and experience of different cultures. <br />
        <button className="explore">Let's Explore</button>
      </p>
      <div className="services">
        <h3 className="services-text">Our Services</h3>
      </div>
      <div className="card-container">
        {/* Card 1 */}
        <div class="card" style={{ width: "18rem" }}>
          <img
            src={hotel}
            className="card-img-top"
            alt="Hotel Booking"
            width={200}
            height={200}
          />
          <div className="card-body">
            <p className="card-text">
              Provide top qualities of hotels all around the world with
              different places, heritages and a view of the city.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={flight}
            className="card-img-top"
            alt="Flight Booking"
            width={200}
            height={200}
          />
          <div className="card-body">
            <p className="card-text">
              Flights with best service and travel across all over the world
              with non-stop services with top qualities airlines like Air India,
              Lufthansa, Qantas, Etihad Airways and many more.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div class="card" style={{ width: "18rem" }}>
          <img
            src={resort}
            class="card-img-top"
            alt="Resort"
            width={200}
            height={200}
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={villa}
            class="card-img-top"
            alt="Villa"
            width={200}
            height={200}
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <hr className="hr"/>
    </>
  );
};

export default Home;

import React from "react";
import banner from "../assets/images/banner.jpeg";
import "../App.css";
import hotel from "../assets/images/service/hotel.jpeg";
import flight from "../assets/images/service/flight_booking.png";
import resort from "../assets/images/service/resort.jpeg";
import villa from "../assets/images/service/villa.jpeg";
import person from "../assets/images/john_doe.png";
import person2 from "../assets/images/jane-dae.jpeg";
import person3 from "../assets/images/emma-smith.jpeg";

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
      <br /> <br />
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
              Flights with best service, travel across all over the world with
              non-stop services. Top qualities airlines like Air India,
              Lufthansa and many more.
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
      <br /> <br /> <br /> <br />
      <h3 className="services-text">Our clients</h3>
      <br /> <br />
      <div className="client">
        {/* Person 1 */}
        <div className="person-box">
          <div>
            <span className="client-box">
              <img
                src={person}
                alt=""
                width={100}
                height={100}
                style={{ borderRadius: "50px" }}
              />
              <h4>John Doe</h4>
            </span>
            <p>
              My experience with Travlo is amazing provide better facilities
              with reasonable rates.
            </p>
          </div>
        </div>
        {/* Person 2 */}
        <div className="person-box">
          <div>
            <span className="client-box">
              <img
                src={person2}
                alt=""
                width={100}
                height={100}
                style={{ borderRadius: "50px" }}
              />
              <h4>Jane Dae</h4>
            </span>
            <p>
              Travlo is a great travel agency organization with amazing
              experience and on time booking of flights, trains, hotel and many
              more.
            </p>
          </div>
        </div>
        {/* Person 3 */}
        <div className="person-box">
          <div>
            <span className="client-box">
              <img
                src={person3}
                alt=""
                width={100}
                height={100}
                style={{ borderRadius: "50px" }}
              />
              <h4>Emma Smith</h4>
            </span>
            <p>
              Travlo now become a niche name in Travel Agency business and many
              people across the world choose Travlo to book tickets.
            </p>
          </div>
        </div>
      </div>
      <hr className="hr" />
    </>
  );
};

export default Home;

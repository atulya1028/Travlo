import React from "react";
import './App.css';

const Location = () => {
  return (
   <div className="mapContainer">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.609189764283!2d75.8253559754925!3d26.91589547664534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6b67abe89b9%3A0x812224f94170fa53!2s4675%2C%20Thakur%20Pachewar%20Ka%20Rasta%2C%20Ghat%20Darwaza%2C%20Jaipur%2C%20Rajasthan%20302003!5e0!3m2!1sen!2sin!4v1733916689355!5m2!1sen!2sin"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      className="mapFrame"
   />
   </div>
  );
};

export default Location;
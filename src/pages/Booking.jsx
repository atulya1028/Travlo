import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/booking.css';
import '../App.css';

const Booking = () => {
  const [tripType, setTripType] = useState("one-way");
  const [formFields, setFormFields] = useState([
    { from: "", to: "", date: "", returnDate: "" },
  ]);

  const handleTripTypeChange = (type) => {
    setTripType(type);
    if (type === "multi-city") {
      setFormFields([{ from: "", to: "", date: "", returnDate: "" }]);
    } else {
      setFormFields([{ from: "", to: "", date: "", returnDate: "" }]);
    }
  };

  const addNewCity = () => {
    setFormFields([...formFields, { from: "", to: "", date: "", returnDate: "" }]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedFields = [...formFields];
    updatedFields[index][field] = value;
    setFormFields(updatedFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details", { tripType, formFields });
    alert("Booking details submitted successfully!");
  };

  return (
   <>
    <div className="container mt-5 main-box">
      <h2 className="mb-4">Flight Booking</h2>
      <div className="btn-group mb-4" role="group">
        <button
          className={`btn btn-${tripType === "one-way" ? "primary" : "outline-primary"}`}
          onClick={() => handleTripTypeChange("one-way")}
        >
          One Way
        </button>
        <button
          className={`btn btn-${tripType === "round-trip" ? "primary" : "outline-primary"}`}
          onClick={() => handleTripTypeChange("round-trip")}
        >
          Round Trip
        </button>
        <button
          className={`btn btn-${tripType === "multi-city" ? "primary" : "outline-primary"}`}
          onClick={() => handleTripTypeChange("multi-city")}
        >
          Multi-City
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {formFields.map((field, index) => (
          <div className="row g-3 align-items-center mb-3" key={index}>
            <div className="col-md-3">
              From:
              <input
                type="text"
                className="form-control"
                placeholder="From"
                value={field.from}
                onChange={(e) => handleInputChange(index, "from", e.target.value)}
                required
              />
            </div>
            <div className="col-md-3">
              To:
              <input
                type="text"
                className="form-control"
                placeholder="To"
                value={field.to}
                onChange={(e) => handleInputChange(index, "to", e.target.value)}
                required
              />
            </div>
            <div className="col-md-3">
              Departure:
              <input
                type="date"
                className="form-control"
                value={field.date}
                onChange={(e) => handleInputChange(index, "date", e.target.value)}
                required
              />
            </div>
            {tripType === "round-trip" && (
              <div className="col-md-3">
                Return:
                <input
                  type="date"
                  className="form-control"
                  placeholder="Return Date"
                  value={field.returnDate}
                  onChange={(e) => handleInputChange(index, "returnDate", e.target.value)}
                  required
                />
              </div>
            )}
          </div>
        ))}

        {tripType === "multi-city" && (
          <div className="mb-3">
            <button type="button" className="btn btn-outline-secondary" onClick={addNewCity}>
              + Add Another City
            </button>
          </div>
        )}

        <div className="d-grid">
          <button type="submit" className="btn btn-success">
            Search Flights
          </button>
        </div>
      </form> 
    </div>
    <hr className="hr" />
   </>
  );
};

export default Booking;

import React, { useState } from "react";
import "./MovieBookingForm.css";

const MovieBookingForm = ({ movieDetails, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store user details in local storage
    localStorage.setItem("userName", formData.name);
    localStorage.setItem("userEmail", formData.email);
    console.log("Form submitted:", formData);
    // eslint-disable-next-line
    alert(formData.name + " " + "Your Tickets have been booked!");
    onClose();
  };

  return (
    <div className="modal">
      <button className="btn bg-success-subtle mb-2" onClick={onClose}>
        Go Back
      </button>
      <div className="modal-content bg-black p-3">
        <div className="row text-white">
          <div className="col-md-4">
            <img
              src={
                movieDetails.image
                  ? movieDetails.image.medium
                  : process.env.PUBLIC_URL + "/images/movie_image.jpg"
              }
              alt={movieDetails.name}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 ms-3">
            <h3 className="mb-2 text-warning">
              <strong>{movieDetails.name}</strong>
            </h3>
            <p>{movieDetails.language}, 2D</p>
            <p>
              {movieDetails.schedule.days},{movieDetails.premiered} |{" "}
              {movieDetails.schedule.time}
            </p>
            <p>{movieDetails.genres.join(", ")}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="form-control bg-secondary-subtle mt-3">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-outline-success bg-success-subtle">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default MovieBookingForm;

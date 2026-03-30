import React, { useState } from "react";

function BookingForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (formData.guests < 1) newErrors.guests = "Minimum 1 guest required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Booking Form">
      <label htmlFor="date">Date:</label>
      <input
        id="date"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      {errors.date && <p>{errors.date}</p>}

      <label htmlFor="time">Time:</label>
      <input
        id="time"
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
      />
      {errors.time && <p>{errors.time}</p>}

      <label htmlFor="guests">Number of Guests:</label>
      <input
        id="guests"
        type="number"
        name="guests"
        min="1"
        value={formData.guests}
        onChange={handleChange}
      />
      {errors.guests && <p>{errors.guests}</p>}

      <label htmlFor="occasion">Occasion:</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit">Reserve Table</button>
    </form>
  );
}

export default BookingForm;
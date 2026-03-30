import React, { useState } from "react";
import BookingForm from "./components/BookingForm";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <main>
      <h1>Little Lemon Table Booking</h1>
      {!isSubmitted ? (
        <BookingForm onSubmit={() => setIsSubmitted(true)} />
      ) : (
        <ConfirmedBooking />
      )}
    </main>
  );
}

export default App;
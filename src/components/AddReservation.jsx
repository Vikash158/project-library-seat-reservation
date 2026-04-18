import React, { useState } from "react";

function AddReservation({ addReservation }) {
  const [name, setName] = useState("");
  const [seat, setSeat] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !seat) {
      alert("Enter all details");
      return;
    }

    addReservation({ name, seat });

    setName("");
    setSeat("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Seat Number"
        value={seat}
        onChange={(e) => setSeat(e.target.value)}
      />

      <button type="submit">Reserve</button>
    </form>
  );
}

export default AddReservation;

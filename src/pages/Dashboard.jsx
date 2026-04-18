import React, { useState } from "react";
import AddReservation from "../components/AddReservation.jsx";
import SeatCard from "../components/SeatCard.jsx";

function Dashboard({ logoutUser }) {
  const [reservations, setReservations] = useState([]);

  const [seats, setSeats] = useState([
    { seatNumber: 1, isReserved: false, name: "" },
    { seatNumber: 2, isReserved: false, name: "" },
    { seatNumber: 3, isReserved: false, name: "" },
    { seatNumber: 4, isReserved: false, name: "" },
    { seatNumber: 5, isReserved: false, name: "" }
  ]);

  const addReservation = ({ name, seat }) => {
    const seatNum = parseInt(seat);

    // check valid seat
    const exists = seats.find((s) => s.seatNumber === seatNum);
    if (!exists) {
      alert("Invalid seat number");
      return;
    }

    if (exists.isReserved) {
      alert("Seat already reserved!");
      return;
    }

    const updatedSeats = seats.map((s) =>
      s.seatNumber === seatNum
        ? { ...s, isReserved: true, name }
        : s
    );

    setSeats(updatedSeats);
    setReservations([...reservations, { name, seat: seatNum }]);
  };

  return (
    <div>
      <h2>Library Seat Reservation System</h2>

      <button onClick={logoutUser}>Logout</button>

      <AddReservation addReservation={addReservation} />

      <h3>Reservations</h3>
      <ul>
        {reservations.map((r, index) => (
          <li key={index}>
            {r.name} reserved Seat {r.seat}
          </li>
        ))}
      </ul>

      <h3>Seat Status</h3>
      <div className="card-container">
        {seats.map((seat) => (
          <SeatCard key={seat.seatNumber} data={seat} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

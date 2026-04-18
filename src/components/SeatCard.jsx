import React from "react";

function SeatCard({ data }) {
  return (
    <div className="card">
      <h3>Seat {data.seatNumber}</h3>

      <p>
        Status:{" "}
        <span style={{ color: data.isReserved ? "red" : "green" }}>
          {data.isReserved ? "Reserved" : "Available"}
        </span>
      </p>

      {data.isReserved && <p>Reserved By: {data.name}</p>}
    </div>
  );
}

export default SeatCard;

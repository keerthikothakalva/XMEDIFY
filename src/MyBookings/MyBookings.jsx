import { useEffect, useState } from "react";
import hospitalIcon from "../assets/hospitalicon.jpg";
import thumbsup from "../assets/thumbsup.jpg";
import cta from "../assets/cta.jpg";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(savedBookings);
  }, []);

  return (
    <div
      style={{
        background: "#eef4fb",
        padding: "40px",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ marginBottom: "30px" }}>My Bookings</h1>

      <div style={{ display: "flex", gap: "30px" }}>

        
        <div style={{ flex: 3 }} data-testid="booking-list">

          {bookings.length === 0 && (
            <p>No Bookings Found</p>
          )}

          {bookings.map((booking, index) => {

            const hospitalName =
              booking.hospitalName || booking["Hospital Name"];

            const city =
              booking.city || booking.City;

            const state =
              booking.state || booking.State;

            return (
              <div
                key={`${hospitalName}-${booking.date}-${booking.time}-${index}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "10px",
                  marginBottom: "20px",
                  gap: "20px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                }}
              >
                
                <img src={hospitalIcon} alt="hospital" width="70" />

                
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: "#007bff", margin: 0 }}>
                    {hospitalName}
                  </h3>

                  <p style={{ margin: "5px 0" }}>
                    {city}, {state}
                  </p>

                  <img src={thumbsup} alt="rating" width="40" />
                </div>

                
                <span
                  style={{
                    border: "1px solid #2a7de1",
                    color: "#2a7de1",
                    padding: "6px 12px",
                    borderRadius: "6px"
                  }}
                >
                  {booking.time}
                </span>

                
                <span
                  style={{
                    border: "1px solid green",
                    color: "green",
                    padding: "6px 12px",
                    borderRadius: "6px"
                  }}
                >
                  {booking.date}
                </span>
              </div>
            );
          })}

        </div>

        
        <div style={{ flex: 1 }}>
          <img
            src={cta}
            alt="cta"
            style={{
              width: "100%",
              borderRadius: "10px"
            }}
          />
        </div>

      </div>
    </div>
  );
}

export default MyBookings;
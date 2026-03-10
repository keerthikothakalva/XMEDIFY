import "./TimeSlotPicker.css";

function TimeSlotPicker({ hospital, selectedDate }) {

  const slotData = {
    Morning: ["11:30 AM"],
    Afternoon: ["12:00 PM","12:30 PM","01:30 PM","02:00 PM","02:30 PM"],
    Evening: ["06:00 PM","06:30 PM","07:00 PM","07:30 PM"]
  };

  const handleBooking = (time) => {

    const booking = {
      "Hospital Name": hospital["Hospital Name"],
      City: hospital.City,
      State: hospital.State,
      date: selectedDate,
      time: time
    };
    const existing =
    JSON.parse(localStorage.getItem("bookings")) || [];
  
  localStorage.setItem(
    "bookings",
    JSON.stringify([...existing, booking])
  );
  }

  return (
    <div className="booking-container">

      {Object.keys(slotData).map((period) => (

        <div key={period} className="slot-section">

          <p className="period">{period}</p>

          <div className="slot-grid">

            {slotData[period].map((time) => (

              <button
                key={time}
                className="slot-btn"
                onClick={() => handleBooking(time)}
              >
                {time}
              </button>

            ))}

          </div>

        </div>

      ))}

    </div>
  );
}

export default TimeSlotPicker;
import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import "../BookingModal/BookingModal.css";

function BookingModal({ hospital }) {

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>

      
      <button
        className="book-btn"
        onClick={handleToggle}
      >
        Book FREE Center Visit
      </button>

      
      {open && (
        <div className="calendar-box">
          <Calendar hospital={hospital} />
        </div>
      )}

    </div>
  );
}

export default BookingModal;
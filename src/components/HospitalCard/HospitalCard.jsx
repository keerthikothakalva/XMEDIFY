import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import hospitalIcon from "../../assets/hospitalicon.jpg";
import thumbsup from "../../assets/thumbsup.jpg";
import "./HospitalCard.css";

function HospitalCard({ hospital }) {

  const [showSlots, setShowSlots] = useState(false);

  const handleClick = () => {
    setShowSlots(!showSlots);
  };

  return (
    <>
      <div className="hospital-card">

        <img src={hospitalIcon} alt="hospital" className="hospital-icon" />

        <div className="hospital-info">

          <h3>{hospital["Hospital Name"]}</h3>

          <p className="address">{hospital.Address}</p>

          <p className="location">
            {hospital.City}, {hospital.State}
          </p>

          <p className="price">
            <span>FREE</span> Consultation fee at clinic
          </p>

          <div className="rating">
            <img src={thumbsup} alt="rating" />
            <span>{hospital["Overall Rating"]}</span>
          </div>

        </div>

        <div className="hospital-action">

          <p className="available">Available Today</p>

          <button onClick={handleClick}>
            Book FREE Center Visit
          </button>

        </div>

      </div>

      {showSlots && <Calendar hospital={hospital} />}
    </>
  );
}

export default HospitalCard;
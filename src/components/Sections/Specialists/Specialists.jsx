import "./Specialists.css";
import SpecialistCard from "./SpecialistCard";

import doc1 from "../../../assets/lesley.jpg";
import doc2 from "../../../assets/heena.jpg";
import doc3 from "../../../assets/ahmad-stevens.jpg";
import doc4 from "../../../assets/ahmad.jpg";
import doc5 from "../../../assets/ankur.jpg";

function Specialists() {

  const doctors = [
    {
      name: "Dr. Lesley Hull",
      field: "Medicine",
      img: doc1
    },
    {
      name: "Dr. Heena Sachdeva",
      field: "Orthopedics",
      img: doc2
    },
    {
      name: "Dr. Ahmad Stevens",
      field: "Neurologist",
      img: doc3
    },
    {
      name: "Dr. Ahmed Khan",
      field: "Cardiology",
      img: doc4
    },
    {
      name: "Dr. Ankur Sharma",
      field: "Medicine",
      img: doc5
    }
  ];

  return (
    <section className="specialists-section">

      <h2>Our Medical Specialist</h2>

      <div className="specialists-container">
        {doctors.map((doc, index) => (
          <SpecialistCard key={index} doctor={doc} />
        ))}
      </div>

      <div className="slider-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
      </div>

    </section>
  );
}

export default Specialists;
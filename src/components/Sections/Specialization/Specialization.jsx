import "./Specialization.css";

import cardiology from "../../../assets/cardiology.jpg";
import bloodTest from "../../../assets/blood-test.jpg";
import xray from "../../../assets/X-Ray.jpg";
import mri from "../../../assets/mri.jpg";
import drugstore from "../../../assets/Drugstore.jpg";
import primaryCare from "../../../assets/primary-care.jpg";
import capsule from "../../../assets/Capsule.jpg";
import hospital from "../../../assets/Hospital.jpg";

function Specialization() {
  const data = [
    { name: "Dentistry", img: hospital },
    { name: "Primary Care", img: primaryCare },
    { name: "Cardiology", img: cardiology },
    { name: "MRI Resonance", img: mri },
    { name: "Blood Test", img: bloodTest },
    { name: "Psychologist", img: capsule },
    { name: "Laboratory", img: drugstore },
    { name: "X-Ray", img: xray },
  ];

  return (
    <section className="specialization-section">
      <h2 className="title">Find By Specialisation</h2>

      <div className="specialization-grid">
        {data.map((item, index) => (
          <div className="specialization-card" key={index}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      <button className="view-all-btn">View All</button>
    </section>
  );
}

export default Specialization;
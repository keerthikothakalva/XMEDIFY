import "./SpecialistCard.css";

function SpecialistCard({ doctor }) {
  return (
    <div className="specialist-card">
      <img src={doctor.img} alt={doctor.name} />
      <h3>{doctor.name}</h3>
      <p>{doctor.field}</p>
    </div>
  );
}

export default SpecialistCard;


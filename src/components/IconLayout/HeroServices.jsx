import IconCard from "../IconCard/IconCard";
import doctorIcon from "../../assets/Doctor.jpg";
import hospitalIcon from "../../assets/Hospital.jpg";

function HeroServices() {
  return (
    <section style={{ padding: "50px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Our Services
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        <IconCard
          icon={hospitalIcon}
          title="Hospitals"
          description="Find top-rated hospitals near you."
        />

        <IconCard
          icon={doctorIcon}
          title="Doctors"
          description="Consult experienced specialists."
        />

        <IconCard
          icon="📅"
          title="Appointments"
          description="Book visits instantly online."
        />
      </div>
    </section>
  );
}

export default HeroServices;
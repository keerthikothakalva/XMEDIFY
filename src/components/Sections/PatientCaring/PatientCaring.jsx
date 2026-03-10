import "./PatientCaring.css";
import img1 from "../../../assets/patientcaring.jpg";
import tick from "../../../assets/tick-blue.jpg";

function PatientCaring() {
  return (
    <section className="patient-section">
      <div className="patient-container">

        
        <div className="patient-image">
          <img src={img1} alt="patient caring" />
        </div>

        
        <div className="patient-content">

          <p className="patient-small">
            HELPING PATIENTS FROM AROUND THE GLOBE!!
          </p>

          <h2>
            Patient <span>Caring</span>
          </h2>

          <p className="patient-desc">
            Our goal is to deliver quality of care in a courteous,
            respectful, and compassionate manner. We hope you will
            allow us to care for you and strive to be the first and
            best choice for healthcare.
          </p>

          <ul className="patient-list">
            <li>
              <img src={tick} alt="tick" />
              Stay Updated About Your Health
            </li>

            <li>
              <img src={tick} alt="tick" />
              Check Your Results Online
            </li>

            <li>
              <img src={tick} alt="tick" />
              Manage Your Appointments
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}

export default PatientCaring;
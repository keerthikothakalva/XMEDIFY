import React from "react";
import "./OurFamilies.css";
import banner from "../../../assets/our-families-banner.jpg";

function OurFamilies() {
  return (
    <section className="families">
      <div className="families-container">

        
        <div className="families-left">
          <p className="subtitle">
            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
          </p>

          <h2>Our Families</h2>

          <p className="description">
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist,
            we can provide referrals or advice about the type of practitioner
            you require. We treat all enquiries sensitively and in the
            strictest confidence.
          </p>
        </div>

        
        <div className="families-right">
          <img src={banner} alt="Our Families Stats" className="families-image" />
        </div>

      </div>
    </section>
  );
}

export default OurFamilies;
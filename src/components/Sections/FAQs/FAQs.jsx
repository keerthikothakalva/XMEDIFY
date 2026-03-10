import React from "react";
import faqImg from "../../../assets/faqs-banner.jpg";
import "./FAQs.css";

function FAQs() {
  return (
    <section className="faq-section">

      
      <div className="faq-header">
        <p className="faq-subtitle">Get Your Answer</p>
        <h2 className="faq-title">Frequently Asked Questions</h2>
      </div>

      
      <div className="faq-container">

        
        <div className="faq-left">
          <img src={faqImg} alt="FAQ" />
        </div>

        <div className="faq-right">

          <div className="faq-item">
            <span>Why choose our medical for your family?</span>
            <span className="plus">+</span>
          </div>

          <div className="faq-item">
            <span>Why we are different from others?</span>
            <span className="plus">+</span>
          </div>

          <div className="faq-item">
            <span>Trusted & experience senior care & love</span>
            <span className="plus">+</span>
          </div>

          <div className="faq-item">
            <span>How to get appointment for emergency cases?</span>
            <span className="plus">+</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FAQs;
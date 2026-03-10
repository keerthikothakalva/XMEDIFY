import { useState } from "react";

function SmsForm() {

  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("App link sent to " + phone);
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit} className="sms-form">

      <span className="country">+91</span>

      <input
        type="tel"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <button type="submit">Send SMS</button>

    </form>
  );
}

export default SmsForm;
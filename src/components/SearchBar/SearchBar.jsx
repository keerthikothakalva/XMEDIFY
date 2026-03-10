import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../SearchBar/SearchBar.css";

import searchBg from "../../assets/Rectangle 4.jpg";

import doctorIcon from "../../assets/Doctor.jpg";
import labIcon from "../../assets/Drugstore.jpg";
import hospitalIcon from "../../assets/Hospital.jpg";
import medicalIcon from "../../assets/Capsule.jpg";
import ambulanceIcon from "../../assets/Ambulance.jpg";

function SearchBar() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  // Fetch states
  useEffect(() => {
    axios
      .get("https://meddata-backend.onrender.com/states")
      .then((res) => setStates(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Fetch cities when state changes
  useEffect(() => {
    if (!state) return;

    axios
      .get(`https://meddata-backend.onrender.com/cities/${state}`)
      .then((res) => setCities(res.data))
      .catch((err) => console.log(err));
  }, [state]);

  const handleStateChange = (selectedState) => {
    setState(selectedState);
    setCity("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state || !city) {
      alert("Please select state and city");
      return;
    }

    navigate(`/search?state=${state}&city=${city}`);
  };

  return (
    <div
      className="search-wrapper"
      style={{
        backgroundImage: `url(${searchBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "80px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="search-container">
        <form className="search-bar" onSubmit={handleSubmit}>

          
          <div id="state">
  <select
    value={state}
    onChange={(e) => handleStateChange(e.target.value)}
  >
    <option value="">State</option>
    {states.map((s) => (
      <option key={s} value={s}>{s}</option>
    ))}
  </select>

  <ul className="cypress-list">
    {states.map((s) => (
      <li key={s} onClick={() => handleStateChange(s)}>
        {s}
      </li>
    ))}
  </ul>
</div>

          
          <div id="city">
  <select
    value={city}
    disabled={!state}
    onChange={(e) => setCity(e.target.value)}
  >
    <option value="">City</option>
    {cities.map((c) => (
      <option key={c} value={c}>{c}</option>
    ))}
  </select>

  <ul className="cypress-list">
    {cities.map((c) => (
      <li key={c} onClick={() => setCity(c)}>
        {c}
      </li>
    ))}
  </ul>
</div>

          <button id="searchBtn" type="submit">
            Search
          </button>
        </form>

        
        <div className="category-section">
          <p>You may be looking for</p>

          <div className="category-grid">
            <div className="category-card">
              <img src={doctorIcon} alt="Doctors" />
              <p>Doctors</p>
            </div>

            <div className="category-card">
              <img src={labIcon} alt="Labs" />
              <p>Labs</p>
            </div>

            <div className="category-card active">
              <img src={hospitalIcon} alt="Hospitals" />
              <p>Hospitals</p>
            </div>

            <div className="category-card">
              <img src={medicalIcon} alt="Medical Store" />
              <p>Medical Store</p>
            </div>

            <div className="category-card">
              <img src={ambulanceIcon} alt="Ambulance" />
              <p>Ambulance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;


import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SearchHospital from "../components/SearchHospital/SearchHospital";
import HospitalCard from "../components/HospitalCard/HospitalCard";
import BookingModal from "../components/BookingModal/BookingModal";
import cta from "../assets/cta.jpg";
import "./Search.css";

function Search() {
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [filteredHospitals, setFilteredHospitals] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const state = params.get("state");
  const city = params.get("city");

  useEffect(() => {
    if (!state || !city) return;

    setLoading(true);

    axios
      .get(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`)
      .then((res) => {
        setHospitals(res.data);
        setFilteredHospitals(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [state, city]);

  return (
    <div className="search-container">

  <SearchHospital
    hospitals={hospitals}
    setFilteredHospitals={setFilteredHospitals}
  />

  <h1>
    {filteredHospitals.length} medical centers available in {city?.toLowerCase()}
  </h1>

  <div className="search-layout">

    <div className="hospital-list" data-testid="hospital-list">
      {loading ? (
        <p>Loading medical centers...</p>
      ) : (
        filteredHospitals.map((hospital) => (
          <HospitalCard
            key={hospital["Provider ID"]}
            hospital={hospital}
            onSelect={setSelectedHospital}
          />
        ))
      )}
    </div>

    <div className="cta-section">
      <img src={cta} alt="Dental Ad" />
    </div>

  </div>

  {selectedHospital && (
    <BookingModal hospital={selectedHospital} />
  )}

</div>
  );
}

export default Search;
import { useState } from "react";

function SearchHospital({ hospitals = [], setFilteredHospitals }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);

    const filtered = hospitals.filter((hospital) =>
      hospital["Hospital Name"]
        ?.toLowerCase()
        .includes(value.toLowerCase())
    );

    setFilteredHospitals(filtered);
  };

  return (
    <div
      style={{
        margin:"20px 0 40px 0",
        display: "flex",
        gap: "10px",
      }}
    >
      <input
        type="text"
        placeholder="Search hospitals..."
        value={searchText}
        onChange={handleSearch}
        style={{
          padding: "10px",
          width: "100%",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}

export default SearchHospital;
function DaySelector({ selectedDate, setSelectedDate }) {

  return (

    <div style={{ marginBottom: "10px" }}>

      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />

    </div>

  );
}

export default DaySelector;
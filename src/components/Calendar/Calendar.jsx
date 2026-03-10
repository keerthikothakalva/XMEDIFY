import { useState } from "react";
import DaySelector from "./DaySelector/DaySelector";
import TimeSlotPicker from "./TimeSlotPicker/TimeSlotPicker";

function Calendar({ hospital }) {

  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div style={{marginTop:"15px"}}>

      <DaySelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      <TimeSlotPicker
        hospital={hospital}
        selectedDate={selectedDate}
      />

    </div>
  );
}

export default Calendar;
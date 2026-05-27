import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const CalendarIcon = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return <DatePicker showIcon className="input w-full" name="sessionStartDate" selected={selectedDate} onChange={setSelectedDate} />;
};
export default CalendarIcon;
import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

export default function MyCalendar() {
  const [value, setValue] = React.useState(dayjs("2022-04-07"));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        openTo="day"
        showDaysOutsideCurrentMonth
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        componentsProps={{
          actionBar: {
            actions: ["today"],
          },
        }}
       
      />
    </LocalizationProvider>
  );
}

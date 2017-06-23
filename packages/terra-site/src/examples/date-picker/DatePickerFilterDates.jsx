import React from 'react';
import DatePicker from 'terra-date-picker';

const isWeekday = (date) => {
  const day = date.day();
  return day !== 0 && day !== 6;
};

const DatePickerFilterDates = () => (
  <DatePicker
    name="date-input-filter"
    filterDate={isWeekday}
  />
);

export default DatePickerFilterDates;

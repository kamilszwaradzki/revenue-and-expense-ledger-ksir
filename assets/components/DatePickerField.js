import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker(props) {
  return (
    <DatePicker slotProps={{
        textField: {
          sx: {
            width: 'max-content',
          }
        }
      }} label="MM/DD/YYYY" {...props}/>
  );
}
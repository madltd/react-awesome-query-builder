import React from "react";
import { DatePicker } from "@mui/lab";
import { FormControl, TextField } from "@mui/material";

export default (props) => {
  const {value, setValue, readonly, customProps, dateFormat, valueFormat, placeholder, useKeyboard} = props;

  const formatSingleValue = (value) => {
    return value && value.isValid() ? value.format(valueFormat) : undefined;
  };

  const handleChange = (value) => {
    setValue(formatSingleValue(value));
  };

  return (
    <FormControl>
      <DatePicker
        readOnly={readonly}
        disabled={readonly}
        placeholder={!readonly ? placeholder : ""}
        format={dateFormat}
        value={value || null}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
        {...customProps}
      />
    </FormControl>
  );
};
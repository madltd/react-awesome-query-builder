import React from "react";
import moment from "moment";
import { TimePicker } from "@material-ui/lab";
import { FormControl, TextField } from "@material-ui/core";

export default (props) => {
  const {value, setValue, use12Hours, readonly, placeholder, timeFormat, valueFormat, customProps, useKeyboard} = props;

  const formatSingleValue = (value) => {
    return value && value.isValid() ? value.format(valueFormat) : undefined;
  };

  const handleChange = (value) => {
    setValue(formatSingleValue(value));
  };

  const hasSeconds = timeFormat.indexOf(":ss") != -1;
  const timeValue = value ? moment(value, timeFormat) : null;

  return (
    <FormControl>
      <TimePicker
        readOnly={readonly}
        disabled={readonly}
        ampm={!!use12Hours}
        placeholder={!readonly ? placeholder : ""}
        format={timeFormat}
        value={timeValue || null}
        onChange={handleChange}
        views={hasSeconds ? ["hours", "minutes", "seconds"] : ["hours", "minutes"]}
        renderInput={(params) => <TextField {...params} />}
        {...customProps}
      />
    </FormControl>
  );
};

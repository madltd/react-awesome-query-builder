import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {mapListValues} from "../../../../utils/stuff";
import FormControl from "@mui/material/FormControl";
import omit from "lodash/omit";

export default ({listValues, value, setValue, allowCustomValues, readonly, placeholder, customProps}) => {
  const renderOptions = () => 
    mapListValues(listValues, ({title, value}) => {
      return <MenuItem key={value} value={value}>{title}</MenuItem>;
    });

  const onChange = e => {
    if (e.target.value === undefined)
      return;
    setValue(e.target.value);
  };

  const renderValue = (selectedValue) => {
    if (!readonly && !selectedValue)
      return placeholder;
    return getListValueTitle(selectedValue);
  };

  const getListValueTitle = (selectedValue) => 
    mapListValues(listValues, ({title, value}) => 
      (value === selectedValue ? title : null)
    )
      .filter(v => v !== null)
      .shift();
  
  const hasValue = value != null;

  console.log('LABEL', !readonly ? (placeholder || null) : null, value);

  return (
    <FormControl>
      <Select
        autoWidth
        displayEmpty
        onChange={onChange}
        value={hasValue ? value : ""}
        disabled={readonly}
        readOnly={readonly}
        renderValue={renderValue}
        {...omit(customProps, ["showSearch", "input"])}
      >
        {renderOptions()}
      </Select>
    </FormControl>
  );
};

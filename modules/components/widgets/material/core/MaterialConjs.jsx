import React from "react";
import FormControl from "@material-ui/core/FormControl";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

export default ({id, not, setNot, conjunctionOptions, setConjunction, disabled, readonly, config, showNot, notLabel}) => {
  //TIP: disabled=true if only 1 rule; readonly=true if immutable mode
  const conjsCount = Object.keys(conjunctionOptions).length;
  const lessThenTwo = disabled;

  const renderOptions = () => 
    Object.keys(conjunctionOptions).map(key => {
      const {id, name, label, checked} = conjunctionOptions[key];
      let postfix = setConjunction.isDummyFn ? "__dummy" : "";
      if (readonly && !checked)
        return null;
      return (
        <Button 
          key={id+postfix} 
          id={id+postfix} 
          // color={checked ? "primary" : null} 
          value={key} 
          onClick={onClick.bind(null, key)} 
          disabled={readonly}
        >
          {label}
        </Button>
      );
    });
  
  const renderNot = () => {
    if (readonly && !not) return null;
    return (
      <Button 
        key={id}
        id={id + "__not"}
        // color={not ? "secondary" : null} 
        onClick={onNotClick.bind(null, !not)} 
        disabled={readonly}
      >
        {notLabel || "NOT"}
      </Button>
    );
  };

  const onClick = value => setConjunction(value);
  const onNotClick = checked => setNot(checked);

  return (
    <FormControl>
      <ButtonGroup 
        disableElevation 
        variant="contained" 
        size="small" 
        disabled={readonly}
      >
        {showNot && renderNot()}
        {conjsCount > 1 && !lessThenTwo && renderOptions()}
      </ButtonGroup>
    </FormControl>
  );
  
};

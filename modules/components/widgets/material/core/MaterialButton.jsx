import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

export default ({type, label, onClick, config}) => {
  const typeToOnlyIcon = {
    "delGroup": <DeleteIcon />,
    "delRuleGroup": <DeleteIcon />,
    "delRule": <DeleteIcon />,
    "addRuleGroup": <AddIcon />,
    "addRuleGroupExt": <AddIcon />,
  };
  const typeToIcon = {
    "addRule": <AddIcon />,
    "addGroup": <AddIcon />,
  };
  const typeToColor = {
    "addRule": "inherit",
    "addRuleGroup": "inherit",
    "addRuleGroupExt": "inherit",
    "addGroup": "primary",
    "delGroup": "secondary",
    "delRuleGroup": "secondary",
    "delRule": "secondary",
  };

  if (typeToOnlyIcon[type])
    return <IconButton size="small" onClick={onClick}>{typeToOnlyIcon[type]}</IconButton>;
  else
    return <Button size="small" onClick={onClick} startIcon={typeToIcon[type]}>{label}</Button>;
};

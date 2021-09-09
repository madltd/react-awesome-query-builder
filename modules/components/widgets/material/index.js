import React from "react";
import AdapterDateFns from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { ThemeProvider, createTheme } from "@mui/material/styles";


// value widgets
import MaterialTextWidget from "./value/MaterialText";
import MaterialTextAreaWidget from "./value/MaterialTextArea";
import MaterialDateWidget from "./value/MaterialDate";
import MaterialDateTimeWidget from "./value/MaterialDateTime";
import MaterialTimeWidget from "./value/MaterialTime";
import MaterialSelectWidget from "./value/MaterialSelect";
import MaterialNumberWidget from "./value/MaterialNumber";
import MaterialSliderWidget from "./value/MaterialSlider";
import MaterialRangeWidget from "./value/MaterialRange";
import MaterialBooleanWidget from "./value/MaterialBoolean";
import MaterialMultiSelectWidget from "./value/MaterialMultiSelect";
import MaterialAutocompleteWidget from "./value/MaterialAutocomplete";

// field select widgets
import MaterialFieldSelect from "./core/MaterialFieldSelect";

// core components
import MaterialButton from "./core/MaterialButton";
import MaterialButtonGroup from "./core/MaterialButtonGroup";
import MaterialConjs from "./core/MaterialConjs";
import MaterialValueSources from "./core/MaterialValueSources";

// provider
const MaterialProvider = ({ config, children }) => {
  const settingsTheme = config.settings.theme || {};
  const settingsLocale = config.settings.locale || {};
  const themeConfig = settingsTheme.material;
  const locale = settingsLocale.material;
  const useTheme = themeConfig || locale;
  const theme = useTheme ? createTheme(themeConfig, locale) : null;

  const base = (<div className="mui">{children}</div>);
  const withProviders = (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {base}
    </LocalizationProvider>
  );
  const withTheme = theme ? (
    <ThemeProvider theme={theme}>
      {withProviders}
    </ThemeProvider>
  ) : withProviders;

  return withTheme;
};


export default {
  MaterialTextWidget,
  MaterialTextAreaWidget,
  MaterialDateWidget,
  MaterialDateTimeWidget,
  MaterialTimeWidget,
  MaterialSelectWidget,
  MaterialNumberWidget,
  MaterialSliderWidget,
  MaterialRangeWidget,
  MaterialBooleanWidget,
  MaterialMultiSelectWidget,
  MaterialAutocompleteWidget,

  MaterialFieldSelect,

  MaterialButton,
  MaterialButtonGroup,
  MaterialConjs,
  MaterialValueSources,

  MaterialProvider,
};

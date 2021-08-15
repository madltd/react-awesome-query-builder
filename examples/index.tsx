import React from "react";
import { hot } from "react-hot-loader/root";
import { AppContainer } from "react-hot-loader";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import ReactDOM from "react-dom";
import Demo from "./demo/demo";

import "../css/antd.less"; // or import "antd/dist/antd.css";
import "../css/styles.scss";
//import '../css/compact_styles.scss'; //optional

const HotDemo = hot(Demo);
const rootElement = window.document.getElementById("root");

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#42fc82',
    },
    secondary: {
      main: '#42c2be',
    },
    background: {
      default: '#10081e',
      paper: '#001036',
    },
    error: {
      main: '#f3175d',
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        variant: 'outlined'
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 4
        },
      },
      defaultProps: {
        TouchRippleProps: {
          classes: { child: 'touch-ripple-child' }
        }
      }
    }
  }
});

ReactDOM.render((
  <ThemeProvider theme={theme}>
    <AppContainer>
      <HotDemo />
    </AppContainer>
  </ThemeProvider>
), rootElement);

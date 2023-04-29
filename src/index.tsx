import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { Toaster } from "react-hot-toast";

import store from "./store";

import App from "./App";

import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  ThemeOptions,
} from "@mui/material";
import { StyledContainer } from "./style";

const theme = createTheme({
  palette: {
    background: {
      default: "#E6F4F1",
      paper: "#E6F4F1",
    },
    primary: {
      main: "#0084d6",
      light: "#00B597",
      dark: "#365477",
      contrastText: "#F3FAFF",
    },
    secondary: {
      main: "#23364b",
      light: "#F3FAFF",
    },
    info: {
      main: "#f3faffc3",
    },
    neutral: {
      main: "#e5f2fa",
    },
  },
} as ThemeOptions);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledContainer maxWidth="xl">
        <App />
      </StyledContainer>
    </ThemeProvider>
    <Toaster />
  </Provider>
);

import { PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    neutral: PaletteColorOptions;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    neutral?: PaletteColorOptions;
  }

  interface Palette {
    neutral: Palette["primary"];
  }

  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
}

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    colors: {
      main: "#E8F5E9",
      secondary: "#00C4C1",
      green: "#8BC34A",
      greenLight: "#DCEDC8",
      greenDark: "#33691E",
      grayLight: "#F5F5F5",
      grayMedium: "#D1D3D4",
      grayDark: "#343434",
      dark: "#1E1E1E",
      white: "#FFFFFF"
    },
  },
  typography: {
    // fontFamily: "Open Sans sans-serif",
  },
  spacing: 8,
});

export default theme;

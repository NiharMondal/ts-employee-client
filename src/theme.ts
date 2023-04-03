import { purple, pink, grey, blueGrey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[300],
      light: purple[200],
    },
    secondary: {
      main: pink[300],
      light: purple[200],
    },
    background: {
      paper: blueGrey[50],
    },
    text: {
      primary: grey[800],
      secondary: blueGrey[700],
    },
  },

  typography: {
    h1: {
      fontSize: "1.9rem",
      "@media (min-width:600px)": {
        fontSize: "2.3rem",
      },
    },
    h2: {
      fontSize: "1.5rem",
      "@media (min-width:600px)": {
        fontSize: "1.7rem",
      },
    },
    h3: {
      fontSize: 22,
      fontWeight: "bold",
      borderRadius: 1,
      "@media (min-width:600px)": {
        fontSize: "1.7rem",
      },
    },
    h4: {
      fontSize: 23,
      fontWeight: "bold",
      borderRadius: 2,
    },
    body1: {
      fontSize: 18,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: "bold",
      fontStyle: "italic",
    },
  },
});

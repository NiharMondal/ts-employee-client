import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
  }

  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
  }
}

export const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
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
      fontSize: 30,
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

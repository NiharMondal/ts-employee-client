import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);


import ReactDOM from 'react-dom/client';
import './index.css';
import {ThemeProvider} from '@mui/material/styles'
import {RouterProvider} from 'react-router-dom'
import { router } from './routes';
import { theme } from './theme';
import { CssBaseline } from '@mui/material';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <RouterProvider router={router}/>
  </ThemeProvider>
);


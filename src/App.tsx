import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './Page/Users.tsx';
import { THEME } from '@/Module/Core/Constant';

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <CssBaseline />
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

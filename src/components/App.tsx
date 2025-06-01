import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { SignupPage } from '../pages/SignupPage';
import { LoginPage } from '../pages/LoginPage';
import CryptoList from '../components/CryptoList/CryptoList';
import CryptoDetails from '../components/CryptoDetails/CryptoDetails';
import CryptoChart from '../components/CryptoChart/CryptoChart';

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="nav-links">
          <NavLink to="/register" className="nav-link">Register</NavLink>
          <NavLink to="/login" className="nav-link">Login</NavLink>
          <NavLink to="/coins" className="nav-link">Coins</NavLink>
        </div>
      </nav>
      
      <div className="content-container">
        <Routes>
          <Route path="/register" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/coins" element={<CryptoList />} />
          <Route path="/coins/:id" element={<><CryptoDetails /> <CryptoChart /> </>} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
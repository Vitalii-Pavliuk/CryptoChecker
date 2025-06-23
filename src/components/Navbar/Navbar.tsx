import { NavLink } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../UI/ThemeContext';
import './Navbar.scss';

interface NavbarProps {
  isAuthenticated: boolean;
  userEmail?: string | null;
  changeLanguage: (lng: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated, userEmail, changeLanguage }) => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      {!isAuthenticated && (
        <>
        <div className="nav-links">
          <NavLink to="/register" className="nav-link">
            {t('navbar.register')}
          </NavLink>
          <NavLink to="/login" className="nav-link">
            {t('navbar.login')}
          </NavLink>
          </div>
        </>
      )}
      {isAuthenticated && (
        <>
          <div className="user-info">
            <span>{userEmail}</span>
            <button onClick={() => auth.signOut()} className="logout-button">
              {t('navbar.logout')}
            </button>
          </div>
          <div className="nav-links">
                  <NavLink to="/coins" className="nav-link">
        {t('navbar.coins')}
      </NavLink>
          <NavLink to="/favorites" className="nav-link">
            {t('navbar.favorites')}
          </NavLink>
          </div>
        </>
      )}
      <div className="navbar-controls">
        <button
          onClick={() => changeLanguage('en')}
          className={i18n.language === 'en' ? 'active' : ''}
        >
          EN
        </button>
        <button
          onClick={() => changeLanguage('uk')}
          className={i18n.language === 'uk' ? 'active' : ''}
        >
          UA
        </button>
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
      </div>
    </nav>
  );
};

export default Navbar;

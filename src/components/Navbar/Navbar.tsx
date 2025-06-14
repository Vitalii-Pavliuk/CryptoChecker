import { NavLink } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { useTranslation } from 'react-i18next';
import '../App.css';

interface NavbarProps {
  isAuthenticated: boolean;
  userEmail?: string | null;
  changeLanguage: (lng: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated, userEmail, changeLanguage }) => {
  const { t, i18n } = useTranslation();

  return (
    <nav className="navbar">
      <div className="nav-links">
        {!isAuthenticated && (
          <>
            <NavLink to="/register" className="nav-link">
              {t('navbar.register')}
            </NavLink>
            <NavLink to="/login" className="nav-link">
              {t('navbar.login')}
            </NavLink>
          </>
        )}
        <NavLink to="/coins" className="nav-link">
          {t('navbar.coins')}
        </NavLink>
        {isAuthenticated && (
          <>
            <NavLink to="/favorites" className="nav-link">
              {t('navbar.favorites')}
            </NavLink>
            <div className="user-info">
              <span>{userEmail}</span>
              <button onClick={() => auth.signOut()} className="logout-button">
                {t('navbar.logout')}
              </button>
            </div>
          </>
        )}
        <div className="language-switcher">
          <button
            onClick={() => changeLanguage('en')}
            className={`lang-button ${i18n.language === 'en' ? 'active' : ''}`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage('uk')}
            className={`lang-button ${i18n.language === 'uk' ? 'active' : ''}`}
          >
            UA
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

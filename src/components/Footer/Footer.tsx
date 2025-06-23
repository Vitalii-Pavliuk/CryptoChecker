import { useTranslation } from 'react-i18next';
import './Footer.scss';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <span>{t('footer.copyright')}</span>
    </footer>
  );
};

export default Footer;

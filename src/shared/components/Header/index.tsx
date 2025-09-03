import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/header__logo-offcorss.png" alt="Offcorss Logo" className={styles.logo} />
    </header>
  );
};

export default Header;

import styles from './logo.module.scss';
import zmLogo from '../../assets/logo.svg';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={zmLogo} className="logo" alt="Логотип ZM" width={140} height={42} />
    </div>
  );
};
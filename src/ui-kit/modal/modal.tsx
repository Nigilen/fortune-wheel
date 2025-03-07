import { Button } from '../button/button';
import styles from './modal.module.scss';
import cn from 'classnames';

interface ModalProps {
  onClose: () => void;
  text: string | null;
};

export function Modal({text, onClose}: ModalProps) {
  return (
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal}>
          <div className={cn(styles.modal__title, "text-stroke")}>Ты молодец!</div>
          <div className={cn(styles.modal__value, "text-stroke")}>Вот твои {text}</div>
          <Button text="Забрать" onClick={onClose} />
        </div>
      </div>
    </>
        
  );
}
import cn from 'classnames';
import styles from './Modal.module.scss';

interface IModalComponent {
  isOpen: boolean;
  toggleModal?: () => void;
}
export const ModalComponent = ({ isOpen, toggleModal }: IModalComponent) => {

  return (
    <div>
      {isOpen && (
        <div className={cn(styles.zIndexClass, styles.modalOverlay)}>
          <div className={styles.modal}>
            <h2>Popup Modal Content</h2>
            <p>This is a mobile-responsive popup modal.</p>
            <button className={styles.closeButton} onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

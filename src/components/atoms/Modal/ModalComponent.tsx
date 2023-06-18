import cn from 'classnames';
import CloseIcon from '@resources/images/svg/close.svg';
import { getExtraClasses } from '@utils/common';
import styles from './Modal.module.scss';

interface IModalComponent {
  children?: any;
  className?: string;
  isOpen: boolean;
  isbuttonvisible?: boolean;
  modalcontainerclassName?: string,
  toggleModal?: () => void;
}
export const ModalComponent = ({ isOpen, toggleModal, children, className, modalcontainerclassName, isbuttonvisible }: IModalComponent) => {
  const extraClasses = getExtraClasses(styles, className);
  const modalcontainerclasses = getExtraClasses(styles, modalcontainerclassName);

  return (
    <div>
      {isOpen && (
        <div className={cn(styles.zIndexClass, styles.modalOverlay )}>
          <div className={cn(styles.modal, extraClasses)}>
            {/* <h2>Popup Modal Content</h2>
            <p>This is a mobile-responsive popup modal.</p> */}
            <div className={cn(styles.modal_container, modalcontainerclasses)}>
            {children}
              </div>
           {isbuttonvisible &&
             <button className={styles.closeButton} onClick={toggleModal}>
             <img alt='' src={CloseIcon} />
           </button>
           }
          </div>
        </div>
      )}
    </div>
  );
};

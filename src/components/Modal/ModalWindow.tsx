import React, {useContext} from 'react';
import { IUser } from '../../App';
import styles from './ModalWindow.module.css';
import closeIcon from '../../images/close-icon.png'
import ThemeContext from '../../context';
import classNames from 'classnames';
import Modal from '@mui/material/Modal';


interface ModalWindowProps {
    author: IUser
    isOpen: boolean
    onClose(): void
}

const ModalWindow: React.FC<ModalWindowProps> = ({author, isOpen, onClose}) => {
  const {themeType, setThemeType} = useContext(ThemeContext);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <div className={styles.modal}>
        <div className = { classNames(styles.modalBox, {
          [styles.modalBoxLight]: themeType === 'light',
          [styles.modalBoxDark]: themeType !== 'light'
          })}>
          <div className={styles.title}>
            {author?.name}
            <img className={styles.closeIcon} src={closeIcon} onClick={onClose}/>
          </div>
          <div className={styles.content}>
            Address: {author?.address.city}, {author?.address.street}, {author?.address.suite} <br/>
            <div className={styles.emailPhone}>Email: {author?.email} Phone: {author?.phone} </div>
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            Close
          </button>
        </div>
      </div>

    </Modal>
  );
}

export default ModalWindow
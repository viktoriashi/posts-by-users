import React, {useContext} from 'react';
import { IUser } from '../../App';
import './ModalWindow.css';
import closeIcon from '../../images/close-icon.png'
import ThemeContext from '../../context';


interface ModalWindowProps {
    author: IUser | undefined
    isOpen: boolean
    onClose(): void
}

const ModalWindow: React.FC<ModalWindowProps> = ({author, isOpen, onClose}) => {
  const {themeType, setThemeType} = useContext(ThemeContext);

  return ( isOpen?
    <div className='modal'>
      <div className={`modal__box ${themeType === 'light' ? "modal__box-light" : "modal__box-dark"}`}>
        <div className='modal__title'>
          {author?.name}
          <img className='modal__close-icon' src={closeIcon} onClick={onClose}/>
        </div>
        <div className='modal__content'>
          Address: {author?.address.city}, {author?.address.street}, {author?.address.suite} <br/>
          <div className='modal__content_email-phone'>Email: {author?.email} Phone: {author?.phone} </div>
        </div>
        <button className='modal__close-button' onClick={onClose}>
          Close
        </button>
      </div>
    </div>
: null
  );
}

export default ModalWindow
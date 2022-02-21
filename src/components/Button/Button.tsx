import React, { useContext } from "react";
import styles from './Button.module.css'
import ThemeContext from '../../context';



interface ButtonProps {
    type: string
    onClick(): void
}

const Button: React.FC<ButtonProps> = ({type, onClick, children}) => {
    const {themeType, setThemeType} = useContext(ThemeContext);
   
    return (
        <button className={`${styles[type]} ${styles[type + themeType]}`} onClick={onClick}> 
            {children}
        </button>
    )
}



export default Button;
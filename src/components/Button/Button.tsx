import React, { useContext } from "react";
import './Button.css'
import ThemeContext from '../../context';


interface ButtonProps {
    type: string
    onClick(): void
}

const Button: React.FC<ButtonProps> = ({type, onClick, children}) => {
    const {themeType, setThemeType} = useContext(ThemeContext);

    return (
        <button className={`button__${type} button__${type}-${themeType}`} onClick={onClick}>
            {children}
        </button>
    )
}



export default Button;
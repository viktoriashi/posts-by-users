import React, {Dispatch, SetStateAction} from "react";
import { ThemeType } from "./App";

interface ThemeContextProps {
    themeType: ThemeType,
    setThemeType: Dispatch<SetStateAction<ThemeType>>
}

const ThemeContext = React.createContext<ThemeContextProps>({
    themeType: 'light'
} as ThemeContextProps);


export default ThemeContext
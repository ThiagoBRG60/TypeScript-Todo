import { createContext, ReactNode, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import themes from "../styles/theme.styled";

interface ThemeContextType {
   theme: boolean
   handleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
   children: ReactNode
}

function SwitchThemeProvider({ children }: ThemeProviderProps) {
   const [theme, setTheme] = useState(false)
   
   function handleTheme() {
     setTheme(prev => !prev)
   }

   const darkMode = theme ? themes.darkBg : themes.lightBg

   return (
      <ThemeContext.Provider value={{ theme, handleTheme }}>
         <ThemeProvider theme={darkMode}>
            {children}
         </ThemeProvider>
      </ThemeContext.Provider>
   )
}

function useTheme() {
   const context = useContext(ThemeContext)
   if (context === undefined) {
      throw new Error('useTheme must be used within a ThemeProvider')
   }
   return context
}

export { SwitchThemeProvider, useTheme }
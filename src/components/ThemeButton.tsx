import StyledThemeButton from "../styles/ThemeButton.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons"
import { useTheme } from "./ThemeContext"

const ThemeButton = () => {
  const { theme, handleTheme } = useTheme()

  return (
    <StyledThemeButton onClick={handleTheme}>
      {theme ? <FontAwesomeIcon icon={faSun}></FontAwesomeIcon> :
              <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>}
    </StyledThemeButton>
  )
}

export default ThemeButton
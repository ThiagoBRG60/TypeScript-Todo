import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;
      font-family: 'Roboto', sans-serif;
   }
   body {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100dvh;
      background-color: #92B7FF;
      padding: 40px;
   }
`

export default GlobalStyles
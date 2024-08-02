import styled from "styled-components";

const StyledThemeButton = styled.button`
   width: 35px;
   height: 35px;
   border: 0;
   border-radius: 5px;
   color: ${({theme}) => theme.secondaryText};
   background-color: ${({theme}) => theme.highlight};
   font-size: 18px;
   transition: 0.4s;
   cursor: pointer;

   &:hover {
      background-color: ${({theme}) => theme.hover};
   }
`

export default StyledThemeButton
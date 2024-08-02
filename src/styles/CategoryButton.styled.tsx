import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledCustomIcon = styled.div`
   position: relative;
`

const StyledIcon = styled(FontAwesomeIcon)`
   position: absolute;
   transform: translateY(-50%);
   top: 50%;
   right: 10px;
   padding-left: 5px;
   font-size: 14px;
   color: ${({theme}) => theme.secondaryText};
   border-left: 1px solid;
   pointer-events: none;
`

const StyledCategoryButton = styled.select`
   appearance: none;
   width: 145px;
   height: 35px;
   padding: 0 10px;
   border-radius: 5px;
   font-size: 16px;
   font-weight: 500;
   background-color: ${({theme}) => theme.highlight};
   color: ${({theme}) => theme.secondaryText};
   outline: 0;
   border: 0;
   transition: 0.4s;
   cursor: pointer;

   &:hover {
      background-color: ${({theme}) => theme.hover};
   }

   @media (max-width: 768px) {
      width: 100%;
      min-width: 100px;
      max-width: 145px;
   }
`

export {StyledCategoryButton, StyledCustomIcon, StyledIcon}
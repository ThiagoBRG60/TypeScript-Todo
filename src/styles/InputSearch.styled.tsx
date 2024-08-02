import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StyledInputLabel = styled.label`
   position: absolute;
   transform: translateY(-50%);
   top: 50%;
   left: 10px;

   @media (max-width: 768px) {
      top: 22%;
   }
`

const LabelInputIcon = styled(FontAwesomeIcon)`
   color: ${({theme}) => theme.highlight};
`

const StyledInput = styled.input`
   width: 445px;
   height: 35px;
   border: 1px solid ${({theme}) => theme.highlight};
   border-radius: 5px;
   padding-left: 40px;
   font-size: 16px;
   outline: 0;

   &::placeholder {
      color: ${({theme}) => theme.highlight};
      opacity: 0.5;
      font-weight: 500;
   }

   @media (max-width: 540px) {
      width: 100%;
      min-width: 250px;
      max-width: 445px;
   }
`

export {StyledInput, StyledInputLabel, LabelInputIcon}
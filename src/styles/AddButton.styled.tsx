import styled from "styled-components";

const StyledButtonDiv = styled.div`
   width: 100%;
   height: 40px;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   gap: 10px;
   padding: 0 40px;
   position: absolute;
   bottom: 40px;
   left: 0;

   input {
      height: 100%;
      border-radius: 5px;
      outline: 0;
      padding-left: 10px;
      font-size: 14px;
      border: 1px solid ${({theme}) => theme.highlight};
      animation: slideLeft 1.5s ease forwards;

      &::placeholder {
         font-weight: 500;
         color: ${({theme}) => theme.highlight};
         opacity: 0.5;
      }

      @keyframes slideLeft {
         from {
            width: 0%;
         }
          to {
            width: 0%;
            flex-grow: 1;
         }
      }
   }

   button {
      width: 40px;
      height: 100%;
      font-size: 22px;
      border: 0;
      border-radius: 50%;
      cursor: pointer;
      transition: 0.4s;
      color: ${({theme}) => theme.secondaryText};
      background-color: ${({theme}) => theme.highlight};

      &:hover {
         transform: scale(1.1);
      }
   }
`

export default StyledButtonDiv
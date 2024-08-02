import styled from "styled-components";

const StyledTasksList = styled.ul`
   min-width: 70%;
   padding-bottom: 40px;
   display: flex;
   flex-direction: column;
   align-items: center;

   li {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 0;
      font-weight: 500;
      color: ${({theme}) => theme.primaryText};
      user-select: none;

      &:not(:last-of-type) {
         border-bottom: 1px solid ${({theme}) => theme.listLine};
      }

      div {
         display: flex;
         align-items: center;
         gap: 10px;
      }

      div > span {
         width: 25px;
         height: 25px;
         display: flex;
         align-items: center;
         justify-content: center;
         border-radius: 5px;
         background-color: #fff;
         border: 1px solid ${({theme}) => theme.highlight};
         cursor: pointer;
      }

      div > span.active {
         background-color: ${({theme}) => theme.highlight};
         color: #fff;
      }

      p {
         cursor: pointer;
      }

      p.finished {
         text-decoration: line-through;
         opacity: 0.5;
      }

      > span {
         color: red;
         transition: 0.4s;
         cursor: pointer;
         z-index: 1;

         &:hover {
            color: ${({theme}) => theme.primaryText};
         }
      }
   }
`

export {StyledTasksList}
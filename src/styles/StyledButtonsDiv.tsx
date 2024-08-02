import styled from "styled-components";

const StyledButtonsDiv = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
   position: relative;

   div {
      display: flex;
      gap: 10px;
   }
   
   @media (max-width: 768px) {
    flex-direction: column;
   }
`

export default StyledButtonsDiv
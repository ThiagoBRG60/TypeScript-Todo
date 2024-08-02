import styled from "styled-components";

const StyledTodo = styled.div`
  width: 100%;
  max-width: 725px;
  min-height: 670px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 10px;
  position: relative;
  transition: 0.4s;
  background-color: ${({theme}) => theme.primary};

  h1 {
    font-size: 25px;
    font-weight: 500;
    color: ${({theme}) => theme.primaryText};
  }

  @media (max-height: 670px) {
    min-height: 600px;
  }

  @media (max-height: 600px) {
    min-height: 550px;
  }
`;

export default StyledTodo;
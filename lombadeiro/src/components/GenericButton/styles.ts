import styled from "styled-components";

const GenericButtonStyled = styled.button`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  background-color: ${props => props.color};
  color: #999;
`;

export default GenericButtonStyled;
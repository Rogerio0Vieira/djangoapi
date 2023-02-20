import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const SearchFieldInput = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 150px;

  ::placeholder {
    color: #999;
  }

 

`;

export const SearchIconI = styled(FaSearch)`
  
`;



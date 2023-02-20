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

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
  }

`;

export const SearchIconI = styled(FaSearch)`
  color: #999;
`;



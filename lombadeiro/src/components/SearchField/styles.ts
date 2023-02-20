import styled from 'styled-components';

const SearchFieldInput = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 150px;

  ::placeholder {
    color: #999;
  }
`;

export default SearchFieldInput;
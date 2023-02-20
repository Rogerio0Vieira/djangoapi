import styled from 'styled-components';

const SearchField = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;

  ::placeholder {
    color: #999;
  }
`;

export default SearchField;
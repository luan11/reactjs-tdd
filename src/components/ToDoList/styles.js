import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 2rem 0;
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TextField = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  border: 2px solid #e9e9e9;
`;

export const Button = styled.button`
  padding: 1rem 1.5rem;
  border: 0;
  background: indigo;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.35s;
  margin-left: 1rem;

  &:hover {
    background: purple;
  }

  &:disabled {
    cursor: default;
    background: grey;
  }
`;

export const ToDos = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 4px solid #eaeaea;
`;

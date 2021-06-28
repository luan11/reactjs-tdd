import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 992px) {
    width: 50%;
    margin: 0 auto;
  }
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
  display: table;
  margin: 1rem auto;

  &:hover {
    background: purple;
  }

  &:disabled {
    background: grey;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 4px;
  margin: 1rem 0;
  background: white;
  border: 2px solid #eaeaea;
  padding: 1.5rem 2rem;
`;

export const ID = styled.span`
  display: block;
  font-weight: bold;
  border-bottom: 2px solid #eaeaea;
  padding-bottom: 1rem;

  &::before {
    content: '#';
    display: inline-block;
    margin-right: 0.5rem;
    color: #777;
  }
`;

export const Name = styled.h3`
  margin: 0.5rem 0 0;
  text-transform: uppercase;
`;

export const Username = styled.small`
  display: block;
  color: #777;
  margin-bottom: 1.5rem;
`;

export const Email = styled.a`
  color: purple;
  font-weight: bold;
  display: block;
  text-decoration: none;
  transition: color 0.35s;

  &:hover {
    color: indigo;
  }
`;

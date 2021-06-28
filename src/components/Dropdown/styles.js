import styled from 'styled-components';

export const DropdownContainer = styled.div`
  background: #eaeaea;
  border-radius: 4px;
  overflow: hidden;
  margin: 1rem auto;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
`;

export const DropdownHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  border-bottom: 2px solid #cecece;
`;

export const DropdownHeaderTitle = styled.h2`
  margin: 0;
`;

export const DropdownHeaderButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 0;
  background: transparent;
  transition: background 0.45s;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  line-height: 0;

  &:hover {
    background: rgba(0, 0, 0, 0.15);
  }
`;

export const DropdownContentContainer = styled.div`
  ${(props) =>
    props.isOpened
      ? `
        transition: opacity 0.35s .25s, font-size .25s, padding .25s;
        opacity: 1;
        font-size: 1rem;
        padding: 1rem;
      `
      : `
        transition: opacity 0.35s, font-size .25s .25s, padding .25s .25s;
        opacity: 0;
        font-size: 0;
        padding: 0;
      `};
`;

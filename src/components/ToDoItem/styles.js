import styled from 'styled-components';

import P from 'prop-types';

export const Container = styled.div`
  margin: 1rem 0;
  width: 100%;
  padding: 1rem 1.25rem;
  border-radius: 4px;
  border: 2px solid ${({ isDone }) => (isDone ? '#2bcc98' : '#e9e9e9')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.45s;
  ${({ isDone }) => (isDone ? 'color: #2bcc98;' : '')}
`;

Container.propTypes = {
  isDone: P.bool.isRequired,
};

export const Title = styled.h4`
  margin: 0;
`;

export const Actions = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: center;
`;

export const ActionButton = styled.button`
  padding: 0;
  border: 0;
  background: transparent;
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
  font-size: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.35s;
  color: ${({ isDone, variant }) =>
    isDone
      ? '#337bff'
      : variant === 'red'
      ? '#f14a4a'
      : variant === 'green'
      ? '#2bcc98'
      : '#2a2a2a'};

  &:hover {
    opacity: 0.55;
  }
`;

ActionButton.propTypes = {
  isDone: P.bool,
  variant: P.string,
};

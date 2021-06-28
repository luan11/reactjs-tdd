import styled from 'styled-components';

import { Form, Field } from 'formik';

export const FormContainer = styled(Form)`
  width: 100%;
  background: white;
  border-radius: 4px;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export const FormTitle = styled.h3`
  margin-top: 0;
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  align-items: flex-start;
`;

export const FormLabel = styled.label`
  cursor: pointer;
  display: inline-block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const FormInput = styled(Field)`
  border: 2px solid #cecece;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  width: 100%;
`;

export const FormButton = styled.button`
  padding: 0.5rem 1rem;
  border: 0;
  background: indigo;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.35s;

  &:hover {
    background: purple;
  }
`;

export const FormErrorMessage = styled.span`
  font-size: 0.85rem;
  color: red;
  margin: 0.25rem 0;
  display: block;
`;

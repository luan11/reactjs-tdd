import { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';

import Dropdown from './../Dropdown';

import {
  FormContainer,
  FormTitle,
  FormGroup,
  FormLabel,
  FormInput,
  FormButton,
  FormErrorMessage,
} from './styled';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Formik
      initialValues={{ login: '', password: '' }}
      validate={(values) => {
        const errors = {};

        if (!values.login) {
          errors.login = 'Required';
        }

        if (!values.password) {
          errors.password = 'Required';
        }

        return errors;
      }}
      onSubmit={() => {
        setIsSubmitted(true);
      }}
    >
      {({ values, errors, handleBlur, handleChange, handleSubmit }) => (
        <>
          <FormContainer
            method="POST"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <FormTitle>Do your login</FormTitle>

            <FormGroup>
              <FormLabel htmlFor="login">Login</FormLabel>

              <FormInput
                type="text"
                name="login"
                aria-label="login-input"
                onBlur={(e) => {
                  handleBlur(e);

                  if (errors.login) {
                    setIsSubmitted(false);
                  }
                }}
                onChange={(e) => {
                  handleChange(e);

                  setIsSubmitted(false);
                }}
              />

              <ErrorMessage
                name="login"
                aria-label="login-error-message"
                component={FormErrorMessage}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="password">Password</FormLabel>

              <FormInput
                type="password"
                name="password"
                aria-label="password-input"
                onBlur={(e) => {
                  handleBlur(e);

                  if (errors.password) {
                    setIsSubmitted(false);
                  }
                }}
                onChange={(e) => {
                  handleChange(e);

                  setIsSubmitted(false);
                }}
              />

              <ErrorMessage
                name="password"
                aria-label="password-error-message"
                component={FormErrorMessage}
              />
            </FormGroup>

            <FormButton type="submit">Go</FormButton>
          </FormContainer>

          {isSubmitted && (
            <Dropdown title="Submission data">
              <code aria-label="submission-data">
                {JSON.stringify(values, null, 2)}
              </code>
            </Dropdown>
          )}
        </>
      )}
    </Formik>
  );
};

export default Form;

import { Formik, ErrorMessage } from 'formik';

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
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ handleSubmit }) => (
        <FormContainer method="POST" onSubmit={handleSubmit} autoComplete="off">
          <FormTitle>Do your login</FormTitle>

          <FormGroup>
            <FormLabel htmlFor="login">Login</FormLabel>

            <FormInput type="text" name="login" aria-label="login-input" />

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
            />

            <ErrorMessage
              name="password"
              aria-label="password-error-message"
              component={FormErrorMessage}
            />
          </FormGroup>

          <FormButton type="submit">Go</FormButton>
        </FormContainer>
      )}
    </Formik>
  );
};

export default Form;

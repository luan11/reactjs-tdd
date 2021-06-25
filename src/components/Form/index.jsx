import { useRef, useState } from 'react';

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
  const [errors, setErrors] = useState({
    login: null,
    password: null,
  });

  const inputLogin = useRef(null);
  const inputPassword = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (inputLogin.current.value === '') {
      setErrors((e) => ({
        ...e,
        ...{
          login: 'Please fill this field',
        },
      }));
    } else {
      setErrors((e) => ({
        ...e,
        ...{
          login: null,
        },
      }));
    }

    if (inputPassword.current.value === '') {
      setErrors((e) => ({
        ...e,
        ...{
          password: 'Please fill this field',
        },
      }));
    } else {
      setErrors((e) => ({
        ...e,
        ...{
          password: null,
        },
      }));
    }

    if (!errors.login && !errors.password) {
      alert(
        JSON.stringify({
          login: inputLogin.current.value,
          password: inputPassword.current.value,
        })
      );
    }
  }

  return (
    <FormContainer method="POST" onSubmit={handleSubmit}>
      <FormTitle>Do your login</FormTitle>

      <FormGroup>
        <FormLabel htmlFor="login">Login</FormLabel>
        <FormInput type="text" name="login" id="login" ref={inputLogin} />
        {errors.login && <FormErrorMessage>{errors.login}</FormErrorMessage>}
      </FormGroup>

      <FormGroup>
        <FormLabel htmlFor="password">Password</FormLabel>
        <FormInput
          type="password"
          name="password"
          id="password"
          ref={inputPassword}
        />
        {errors.password && (
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        )}
      </FormGroup>

      <FormButton type="submit">Go</FormButton>
    </FormContainer>
  );
};

export default Form;

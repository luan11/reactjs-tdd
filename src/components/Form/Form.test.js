import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form from '.';

describe('Form Component', () => {
  it('should render correctly', () => {
    render(<Form />);

    expect(screen.getByText('Do your login')).toBeInTheDocument();

    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByLabelText('login-input')).toBeInTheDocument();
    expect(screen.getByLabelText('login-input').value).toBe('');

    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('password-input')).toBeInTheDocument();
    expect(screen.getByLabelText('password-input').value).toBe('');

    expect(screen.getByRole('button', { name: /go/i })).toBeInTheDocument();
  });

  it('should show error message for empty input when focusout', async () => {
    render(<Form />);

    const inputLogin = screen.getByLabelText('login-input');
    const inputPassword = screen.getByLabelText('password-input');

    fireEvent.focusOut(inputLogin);

    const inputLoginError = await screen.findByLabelText('login-error-message');

    expect(inputLoginError).toBeInTheDocument();

    fireEvent.focusOut(inputPassword);

    const inputPasswordError = await screen.findByLabelText(
      'password-error-message'
    );

    expect(inputPasswordError).toBeInTheDocument();
  });

  it('should show error message if login and password are empty when submitted', async () => {
    render(<Form />);

    expect(screen.getByLabelText('login-input').value).toBe('');
    expect(screen.getByLabelText('password-input').value).toBe('');

    const submitButton = screen.getByRole('button', { name: /go/i });

    userEvent.click(submitButton);

    await screen.findAllByLabelText(/-error-message/);

    expect(screen.getByLabelText('login-error-message')).toBeInTheDocument();
    expect(screen.getByLabelText('password-error-message')).toBeInTheDocument();
  });

  it('should go ahead if all inputs are valid when submitted', async () => {
    render(<Form />);

    const inputLogin = screen.getByLabelText('login-input');
    const inputPassword = screen.getByLabelText('password-input');
    const submitButton = screen.getByRole('button', { name: /go/i });

    userEvent.type(inputLogin, 'user');

    const inputtedLogin = await screen.findByLabelText('login-input');

    expect(inputtedLogin).toHaveValue('user');

    userEvent.type(inputPassword, '1234');

    const inputtedPassword = await screen.findByLabelText('password-input');

    expect(inputtedPassword).toHaveValue('1234');

    userEvent.click(submitButton);

    const submissionData = await screen.findByLabelText('submission-data');

    expect(submissionData.innerHTML).toBe(
      '{\n  "login": "user",\n  "password": "1234"\n}'
    );
  });
});

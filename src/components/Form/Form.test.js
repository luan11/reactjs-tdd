import { render, screen } from '@testing-library/react';
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
});

import { render, screen } from '@testing-library/react';

import Users from '.';

describe('Users Component', () => {
  it('should load users correctly', async () => {
    render(<Users />);

    expect(screen.getByLabelText('loading')).toHaveTextContent(
      'Please wait...'
    );

    const users = await screen.findByLabelText('users');

    expect(users).toBeInTheDocument();
  });
});

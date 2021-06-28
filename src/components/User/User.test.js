import { render, screen } from '@testing-library/react';

import User from '.';

describe('User Component', () => {
  it('should render correctly', () => {
    const user = {
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
      email: 'johndoe@gmail.com',
    };

    render(
      <User
        id={user.id}
        name={user.name}
        username={user.username}
        email={user.email}
      />
    );

    expect(
      screen.getByLabelText('user-id', { selector: 'span' })
    ).toHaveTextContent(user.id);

    expect(
      screen.getByRole('heading', { text: user.name, level: 3 })
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText('user-username', { selector: 'small' })
    ).toHaveTextContent(user.username);

    expect(screen.getByRole('link', { text: user.email })).toBeInTheDocument();
  });
});

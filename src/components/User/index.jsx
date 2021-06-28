import P from 'prop-types';

import { Container, ID, Name, Username, Email } from './styles';

const User = ({ id, name, username, email }) => {
  return (
    <Container aria-label="user">
      <ID aria-label="user-id">{id}</ID>
      <Name aria-label="user-name">{name}</Name>
      <Username aria-label="user-username">{username}</Username>
      <Email aria-label="user-email" href={`mailto:${email}`}>
        {email}
      </Email>
    </Container>
  );
};

User.propTypes = {
  id: P.number.isRequired,
  name: P.string.isRequired,
  username: P.string.isRequired,
  email: P.string.isRequired,
};

export default User;

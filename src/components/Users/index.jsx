import { useState, useEffect } from 'react';

import api from './../../services/api';

import User from './../User';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const { data } = await api.get('/users');

      setUsers(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  return users.length > 0 ? (
    users.map((user) => (
      <User
        key={user.id}
        id={user.id}
        name={user.name}
        username={user.username}
        email={user.email}
      />
    ))
  ) : (
    <p>No users found...</p>
  );
};

export default Users;

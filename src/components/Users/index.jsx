import { useState, useEffect } from 'react';

import api from './../../services/api';

import User from './../User';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    setLoading(true);

    try {
      const { data } = await api.get('/users');

      setUsers(data);

      setLoading(false);
    } catch (error) {
      console.error(error.message);

      setLoading(false);
    }
  }

  return (
    <div>
      {loading && <p aria-label="loading">Please wait...</p>}

      {users.length > 0 ? (
        <div aria-label="users">
          {users.map((user) => (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
            />
          ))}
        </div>
      ) : (
        !loading && <p>No users found...</p>
      )}
    </div>
  );
};

export default Users;

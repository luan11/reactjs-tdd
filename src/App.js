import React from 'react';

import useToggle from './hooks/useToggle';

import Dropdown from './components/Dropdown';
import Form from './components/Form';
import ErrorBoundary from './components/ErrorBoundary';
import ToDoList from './components/ToDoList';

import { Container, Button } from './App.styles';

const Users = React.lazy(() => import('./components/Users'));

function App() {
  const [loadUsers, toggleLoadUsers] = useToggle();

  return (
    <Container>
      <Dropdown title="How to do Login?">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          repellendus ab optio a! Rerum, recusandae voluptatum! Dolores alias
          aliquam sint rem, ullam exercitationem perspiciatis, amet consequuntur
          asperiores aperiam ab soluta.
        </p>
      </Dropdown>

      <Form />

      <ToDoList />

      <Button type="button" onClick={() => toggleLoadUsers()}>
        {loadUsers ? 'Unload' : 'Load'} users
      </Button>

      {loadUsers && (
        <React.Suspense fallback={<p>Loading...</p>}>
          <ErrorBoundary>
            <Users />
          </ErrorBoundary>
        </React.Suspense>
      )}
    </Container>
  );
}

export default App;

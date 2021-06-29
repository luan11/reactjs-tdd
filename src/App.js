import React from 'react';

import useToggle from './hooks/useToggle';

import Dropdown from './components/Dropdown';
import Form from './components/Form';
import ErrorBoundary from './components/ErrorBoundary';

import { Container, Button } from './App.styles';

const Users = React.lazy(() => import('./components/Users'));
const ToDoList = React.lazy(() => import('./features/ToDoList'));

function App() {
  const [loadUsers, toggleLoadUsers] = useToggle();
  const [loadToDos, toggleLoadToDos] = useToggle();

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

      <Button type="button" onClick={() => toggleLoadToDos()}>
        {loadToDos ? 'Unload' : 'Load'} To Dos
      </Button>

      {loadToDos && (
        <React.Suspense fallback={<p>Loading...</p>}>
          <ToDoList />
        </React.Suspense>
      )}

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

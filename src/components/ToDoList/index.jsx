import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addToDo } from './../../store/ToDos.store';

import ToDoItem from './../ToDoItem';

import { Container, FormGroup, TextField, Button, ToDos } from './styles';

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [newTodoTitle, setNewTodoTitle] = useState('');

  function isValidNewTodoTitle() {
    return newTodoTitle !== '';
  }

  function handleAddToDo() {
    if (!isValidNewTodoTitle()) {
      return;
    }

    dispatch(addToDo(newTodoTitle));

    setNewTodoTitle('');
  }

  return (
    <Container>
      <FormGroup>
        <TextField
          type="text"
          placeholder="Your To Do title..."
          value={newTodoTitle}
          onChange={(event) => setNewTodoTitle(event.target.value)}
        />
        <Button
          type="button"
          onClick={handleAddToDo}
          disabled={!isValidNewTodoTitle()}
        >
          Add
        </Button>
      </FormGroup>
      <ToDos>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <ToDoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              isDone={todo.isDone}
            />
          ))
        ) : (
          <p>Nothing found...</p>
        )}
      </ToDos>
    </Container>
  );
};

export default ToDoList;

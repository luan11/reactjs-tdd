import { useDispatch } from 'react-redux';
import {
  removeToDo,
  toggleDoneToDo,
} from './../../features/ToDoList/toDosSlice';

import P from 'prop-types';

import { FiCheckCircle, FiXCircle, FiRotateCw } from 'react-icons/fi';

import { Container, Title, Actions, ActionButton } from './styles';

const ToDoItem = ({ id, title, isDone }) => {
  const dispatch = useDispatch();

  function toggleIsDone(id) {
    dispatch(toggleDoneToDo(id));
  }

  function handleRemoveToDo(id) {
    dispatch(removeToDo(id));
  }

  return (
    <Container aria-label="to-do" isDone={isDone}>
      <Title>{title}</Title>
      <Actions>
        <ActionButton
          aria-label="handle-to-do"
          type="button"
          variant="green"
          isDone={isDone}
          onClick={() => toggleIsDone(id)}
        >
          {isDone ? (
            <FiRotateCw aria-label="undone-to-do" />
          ) : (
            <FiCheckCircle aria-label="done-to-do" />
          )}
        </ActionButton>

        <ActionButton
          aria-label="remove-to-do"
          type="button"
          variant="red"
          onClick={() => handleRemoveToDo(id)}
        >
          <FiXCircle />
        </ActionButton>
      </Actions>
    </Container>
  );
};

ToDoItem.propTypes = {
  id: P.number.isRequired,
  title: P.string.isRequired,
  isDone: P.bool.isRequired,
};

export default ToDoItem;

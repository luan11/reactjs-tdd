import { useDispatch } from 'react-redux';
import { removeToDo, toggleDoneToDo } from './../../store/ToDos.store';

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
    <Container isDone={isDone}>
      <Title>{title}</Title>
      <Actions>
        <ActionButton
          type="button"
          variant="green"
          isDone={isDone}
          onClick={() => toggleIsDone(id)}
        >
          {isDone ? <FiRotateCw /> : <FiCheckCircle />}
        </ActionButton>

        <ActionButton
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

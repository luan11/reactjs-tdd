import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { store } from './../../store/index';

import ToDoItem from '.';

const toDo = {
  id: 1,
  title: 'My To Do',
  isDone: false,
};

describe('ToDoItem Component', () => {
  it('should render correctly undone to do', () => {
    render(
      <Provider store={store}>
        <ToDoItem id={toDo.id} title={toDo.title} isDone={toDo.isDone} />
      </Provider>
    );

    expect(
      screen.getByRole('heading', { name: 'My To Do' })
    ).toBeInTheDocument();

    expect(screen.getByLabelText('done-to-do')).toBeInTheDocument();

    expect(screen.getByLabelText('remove-to-do')).toBeInTheDocument();
  });

  it('should render correctly done to do', () => {
    render(
      <Provider store={store}>
        <ToDoItem id={toDo.id} title={toDo.title} isDone={!toDo.isDone} />
      </Provider>
    );

    expect(
      screen.getByRole('heading', { name: 'My To Do' })
    ).toBeInTheDocument();

    expect(screen.getByLabelText('undone-to-do')).toBeInTheDocument();

    expect(screen.getByLabelText('remove-to-do')).toBeInTheDocument();
  });
});

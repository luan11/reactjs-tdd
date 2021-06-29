import { createSlice } from '@reduxjs/toolkit';

const todos = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 1,
      title: 'Learn about Redux',
      isDone: false,
    },
  ],
  reducers: {
    addToDo(state, action) {
      const lastId = state.length === 0 ? 0 : state[state.length - 1].id;

      const todo = {
        id: lastId + 1,
        title: action.payload,
        isDone: false,
      };

      state.push(todo);
    },
    removeToDo(state, action) {
      const todo = state.findIndex((t) => t.id === action.payload);

      state = state.splice(todo, 1);
    },
    toggleDoneToDo(state, action) {
      const todo = state.findIndex((t) => t.id === action.payload);

      state[todo].isDone = !state[todo].isDone;
    },
  },
});

export const { addToDo, removeToDo, toggleDoneToDo } = todos.actions;

export default todos.reducer;

import { configureStore } from '@reduxjs/toolkit';

import todosReducer from './ToDos.store';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;

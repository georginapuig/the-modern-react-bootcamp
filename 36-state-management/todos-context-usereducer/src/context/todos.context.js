import React, { createContext } from 'react';
import todoReducer from '../reducers/todos.reducer';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';

const initialTodos = [{ id: 1, task: 'Walk The Goldfish', completed: true }];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    'todos',
    initialTodos,
    todoReducer
  );

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}

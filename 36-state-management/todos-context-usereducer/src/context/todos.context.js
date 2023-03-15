import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todos.reducer';

const initialTodos = [{ id: 1, task: 'Walk The Goldfish', completed: true }];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <>
      <TodosContext.Provider value={todos}>
        <DispatchContext.Provider value={dispatch}>
          {props.children}
        </DispatchContext.Provider>
      </TodosContext.Provider>
    </>
  );
}

import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const initialTodos = [{ id: 1, task: 'Walk The Goldfish', completed: true }];
export const TodosContext = createContext();

export function TodosProvider(props) {
  const todosStuff = useTodoState(initialTodos);

  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}

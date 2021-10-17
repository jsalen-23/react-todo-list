import { createContext } from 'react';
import { useInitialState } from '../hooks/useInitialState';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const initialState = useInitialState();

  return (
    <TodoContext.Provider value={initialState}>{children}</TodoContext.Provider>
  );
};

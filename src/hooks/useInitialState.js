import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useInitialState = () => {
  const {
    storedValue: todos,
    setValue: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const completed = todos.filter((todo) => todo.completed).length;

  const total = todos.length;

  const filterTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  const createTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text: text,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !todos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return {
    loading,
    error,
    total,
    completed,
    search,
    setSearch,
    filterTodos,
    createTodo,
    deleteTodo,
    completeTodo,
    openModal,
    setOpenModal,
  };
};

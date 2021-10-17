import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { TodoCounter } from '../components/TodoCounter/';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import { Layout } from '../components/Layout';
import { TodoButton } from '../components/TodoButton';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';
import { Loading } from '../components/Loading';

import { GlobalStyles } from '../statics/styles/GlobalStyles';
import { TodoEmpty } from '../components/TodoEmpty';

export const AppUI = () => {
  const {
    loading,
    error,
    filterTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  if (error) return <div>Error</div>;

  return (
    <>
      <GlobalStyles />
      <Layout>
        <TodoCounter />
        <TodoSearch />
        {loading ? (
          <Loading />
        ) : (
          <>
            {filterTodos.length === 0 && <TodoEmpty />}
            <TodoList>
              {filterTodos.map((todo, idx) => (
                <TodoItem
                  key={idx}
                  {...todo}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
          </>
        )}
        {openModal && (
          <Modal setOpenModal={setOpenModal}>
            <TodoForm />
          </Modal>
        )}
        <TodoButton setOpenModal={setOpenModal}>Add Task</TodoButton>
      </Layout>
    </>
  );
};

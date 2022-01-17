import { TodoCounter } from "../components/TodoCounter/";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { Layout } from "../components/Layout";
import { TodoButton } from "../components/TodoButton";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";
import { Loading } from "../components/Loading";
import { TodoEmpty } from "../components/TodoEmpty";

import { useInitialState } from "../hooks/useInitialState";
import { GlobalStyles } from "../statics/styles/GlobalStyles";
import { TodoHeader } from "../components/TodoHeader";
import { ChangeAlert } from "../components/ChangeAlert";

function App() {
  const {
    loading,
    error,
    filterTodos,
    createTodo,
    setOpenModal,
    completeTodo,
    deleteTodo,
    openModal,
    total,
    completed,
    search,
    setSearch,
    synchronize,
  } = useInitialState();

  return (
    <>
      <GlobalStyles />
      <Layout>
        <TodoHeader loading={loading}>
          <TodoCounter total={total} completed={completed} />
          <TodoSearch search={search} setSearch={setSearch} />
        </TodoHeader>

        <TodoList
          error={error}
          loading={loading}
          filterTodos={filterTodos}
          total={total}
          search={search}
          onError={() => <div>Error</div>}
          onLoading={() => <Loading />}
          onEmpty={() => <TodoEmpty />}
          onNoResults={(query) => <TodoEmpty />}
        >
          {(todo, idx) => (
            <TodoItem
              key={idx}
              {...todo}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}
        </TodoList>
        <ChangeAlert synchronize={synchronize} />

        {openModal && (
          <Modal setOpenModal={setOpenModal}>
            <TodoForm createTodo={createTodo} setOpenModal={setOpenModal} />
          </Modal>
        )}

        <TodoButton setOpenModal={setOpenModal} loading={loading} pletado>
          Add Task
        </TodoButton>
      </Layout>
    </>
  );
}

export default App;

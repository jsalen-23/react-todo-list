import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { Counter } from './styles';

export const TodoCounter = () => {
  const { total, completed } = useContext(TodoContext);
  return (
    <Counter>
      Has completado <strong>{completed}</strong> de {total} tareas
    </Counter>
  );
};

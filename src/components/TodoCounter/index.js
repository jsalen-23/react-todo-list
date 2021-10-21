import { Counter } from './styles';

export const TodoCounter = ({ total, completed, loading }) => {
  return (
    <Counter $loading={loading}>
      You have completed <strong>{completed}</strong> out of {total} tasks.
    </Counter>
  );
};

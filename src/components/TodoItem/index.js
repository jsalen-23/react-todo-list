import { MdClear, MdOutlineCheckCircle } from 'react-icons/md';
import { List, Task, DeleteWrapper, CheckWrapper } from './styles';

export const TodoItem = ({ text, completed, onComplete, onDelete }) => (
  <List>
    <CheckWrapper completed={completed}>
      <MdOutlineCheckCircle onClick={onComplete} size='26' />
    </CheckWrapper>
    <Task completed={completed}>{text}</Task>
    <DeleteWrapper>
      <MdClear size='26' onClick={onDelete} />
    </DeleteWrapper>
  </List>
);

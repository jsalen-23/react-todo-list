import { Wrapper } from './styles';

export const TodoEmpty = () => {
  const emptyIcon = 'https://i.imgur.com/2yEcofs.png';
  return (
    <Wrapper>
      <h2>Your TODO list is empty.</h2>
      <img src={emptyIcon} alt='Empty Task List' />
    </Wrapper>
  );
};

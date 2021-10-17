import { Button } from './styles';

export const TodoButton = ({ children, setOpenModal }) => {
  const handleClick = () => setOpenModal((prevState) => !prevState);

  return <Button onClick={handleClick}>{children}</Button>;
};

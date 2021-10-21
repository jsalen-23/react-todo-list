import { Button } from './styles';

export const TodoButton = ({ children, setOpenModal, loading }) => {
  const handleClick = () => setOpenModal((prevState) => !prevState);

  return <Button onClick={handleClick} disabled={loading}>{children}</Button>;
};

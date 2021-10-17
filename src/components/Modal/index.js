import ReactDOM from 'react-dom';

import { Wrapper } from './styles';

export const Modal = ({ children, setOpenModal }) => {
  const handleClick = () => setOpenModal((prevState) => !prevState);

  return ReactDOM.createPortal(
    <Wrapper onClick={handleClick}>{children}</Wrapper>,
    document.getElementById('modal')
  );
};

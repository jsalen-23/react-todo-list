import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { MdSearch } from 'react-icons/md';
import { Input, Wrapper } from './styles';

export const TodoSearch = () => {
  const { search, setSearch } = useContext(TodoContext);

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <Wrapper>
      <Input
        type='text'
        placeholder='Comprar arroz'
        value={search}
        onChange={handleChange}
      />
      <MdSearch size='24' />
    </Wrapper>
  );
};

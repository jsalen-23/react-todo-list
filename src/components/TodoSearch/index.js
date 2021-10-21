import { MdSearch } from 'react-icons/md';
import { Input, Wrapper } from './styles';

export const TodoSearch = ({ search, setSearch, loading }) => {
  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <Wrapper>
      <Input
        type='text'
        placeholder='Comprar arroz'
        value={search}
        disabled={loading}
        onChange={handleChange}
      />
      <MdSearch size='24' />
    </Wrapper>
  );
};

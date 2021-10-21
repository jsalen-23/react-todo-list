import { useState } from 'react';
import { Form, Label, Description, ButtonWrapper, Button } from './styles';

export const TodoForm = ({ createTodo, setOpenModal }) => {
  const [value, setValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    createTodo(value);
    setOpenModal((prevState) => !prevState);
  };

  const onCancel = () => setOpenModal((prevState) => !prevState);

  const onChange = ({ target }) => {
    setValue(target.value);
  };

  return (
    <Form onSubmit={onSubmit} onClick={(e) => e.stopPropagation()}>
      <Label htmlFor='description'>Describe your task:</Label>
      <Description
        name='description'
        id='description'
        placeholder='Send email to corporate.'
        value={value}
        onChange={onChange}
      />
      <ButtonWrapper>
        <Button variant='danger' onClick={onCancel}>
          Cancel
        </Button>
        <Button type='submit'>Add</Button>
      </ButtonWrapper>
    </Form>
  );
};

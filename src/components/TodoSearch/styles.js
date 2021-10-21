import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 425px;
  height: 38px;
  display: flex;
  justify-content: center;
  margin: 16px auto 32px;

  & svg {
    position: absolute;
    right: 6%;
    top: calc(50% - 12px);
    color: #22272e;
  }
`;

export const Input = styled.input`
  width: 90%;
  height: 38px;
  padding: 12px;
  font-size: 16px;
  border-radius: 4px;
  font-family: 'Nunito', sans-serif;

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: .6;
  }
`;

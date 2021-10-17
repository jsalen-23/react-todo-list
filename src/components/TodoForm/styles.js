import styled from 'styled-components';

export const Form = styled.form`
  width: 90%;
  max-width: 425px;
  padding: 33px 40px;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: #fff;
`;

export const Label = styled.label`
  text-align: center;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 26px;
  color: black;
`;

export const Description = styled.textarea`
  width: calc(100%-25px);
  height: 96px;
  padding: 12px;
  font-size: 16px;
  color: #1e1e1f;
  background-color: #f9fbfc;
  border: 2px, solid #202329;
  border-radius: 2px;
  box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.25);
  resize: vertical;

  &::placeholder {
    color: #a5a5a5;
    font-family: 'Nunito';
    font-weight: 400;
  }
  &:focus {
    outline-color: #828282;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Button = styled.button`
  display: inline-block;
  width: 120px;
  height: 48px;
  font-family: 'Nunito';
  font-size: 18px;
  font-weight: 400;
  border-radius: 4px;
  border: ${(props) =>
    props.variant === 'danger' ? 'none' : '1px solid #373e47'};
  color: ${(props) => (props.variant === 'danger' ? '#aa0033' : '#373e47')};
`;

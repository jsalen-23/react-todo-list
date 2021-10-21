import styled from 'styled-components';
import { fadeIn } from '../../statics/styles/animations';

export const Wrapper = styled.div`
  background: rgba(32, 35, 41, 0.7);
  position: fixed;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  display: grid;
  place-items: center;
  color: white;
  z-index: 3;
  ${fadeIn({ time: '0.25s' })}
`;

export const TextBox = styled.div`
  width: 320px;
  height: 110px;
  display: grid;
  place-items: center;
  background-color: #f75858;
  border-radius: 4px;

  & p {
    padding: 8px;
    font-size: 16px;
    font-weight: 700;
    color: #f7f7f7;
  }

  & button {
    width: 100%;
    height: 100%;
    color: #373e47;
    font-size: 15px;
    font-family: 'Nunito';
    font-weight: 700;
    background-color: #e4e4e4;
    border-radius:  0 0 4px 4px;
    text-transform: uppercase;
    cursor: pointer;
  }
`
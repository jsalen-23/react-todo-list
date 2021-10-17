import styled from 'styled-components';
import { loadingRing } from '../../statics/styles/animations';

export const Wrapper = styled.section`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    border-color: #fff transparent transparent transparent;
    ${loadingRing({
      time: '1.4s',
      type: 'cubic-bezier(0.5, 0, 0.5, 1)',
      iteration: 'infinite',
    })}

    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;

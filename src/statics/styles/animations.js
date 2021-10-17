import { css, keyframes } from 'styled-components';

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`;

const TopDownKeyframes = keyframes`
  0% {
    top: -50px;
  }
  
  25% {
    top: 50px;
  }

  50% {
    top: -50px;
  }

  75% {
    top: 50px;
  }
  
  100% {
    top: 0;
  }
`;

const loadingRingKeyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;

export const topDown = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${TopDownKeyframes} ${type};
  `;

export const loadingRing = ({
  time = '1.2s',
  type = 'cubic-bezier(0.5, 0, 0.5, 1)',
  iteration = 'infinite',
} = {}) =>
  css`
    animation: ${time} ${loadingRingKeyframes} ${type} ${iteration};
  `;

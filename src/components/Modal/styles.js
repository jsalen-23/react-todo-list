import styled from 'styled-components';
import { fadeIn } from '../../statics/styles/animations';

export const Wrapper = styled.div`
  background: rgba(32, 35, 41, 0.7);
  position: fixed;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  ${fadeIn({ time: '0.3s' })}
`;

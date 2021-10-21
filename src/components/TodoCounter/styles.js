import styled from 'styled-components';

export const Counter = styled.h2`
  font-size: 22px;
  text-align: center;
  opacity: ${props => props.$loading ? '.6' : '1'};
  user-select: none;
  font-weight: 400;

  & strong {
    font-weight: 700;
  }
`;

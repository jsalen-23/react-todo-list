import styled from "styled-components";

export const Wrapper = styled.section`
  grid-area: 1/1/-1/-1;
  width: 100%;
  margin: 0 auto;
  display: grid;
  place-items: center;

  & img {
    width: 80%;
    max-width: 375px;
    height: auto;
  }
`;

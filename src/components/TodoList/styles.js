import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: grid;
  grid-gap: 12px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  }
`;

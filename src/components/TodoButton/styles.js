import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  width: 90%;
  max-width: 425px;
  height: 45px;
  margin: 0 auto;
  right: 0;
  bottom: 16px;
  left: 0;
  font-size: 16px;
  font-weight: 700;
  color: #373e47;
  background-color: #e4e4e4;
  border-radius: 4px;
  text-transform: uppercase;
  opacity: ${(props) => (props.disabled ? ".6" : "1")};
  cursor: pointer;
`;

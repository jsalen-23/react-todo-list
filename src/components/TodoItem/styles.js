import styled from "styled-components";

export const List = styled.li`
  position: relative;
  width: 100%;
  padding: 16px;
  display: flex;
  border: 1px solid #444c56;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    border: 1px solid #e4e4e4;
  }
`;

export const CheckWrapper = styled.div`
  margin-right: 16px;
  display: inline-flex;
  color: ${(props) => (props.completed ? "#0cb51a" : "e4e4e4")};
  opacity: ${(props) => (props.completed ? "1" : "0.6")};
  transition: all 0.3s ease;
  cursor: pointer;
`;

export const DeleteWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: calc(0% - 13px);
  color: #e03838;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 16px;
`;

export const Task = styled.p`
  font-size: 16px;
  text-decoration: ${(props) => (props.completed ? "line-through" : "")};
  color: ${(props) => (props.completed ? "#768390" : "#e4e4e4")};
  transition: color 0.2s ease;
`;

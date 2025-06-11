import { styled } from "styled-components";

export const Button = styled.button<{ variant?: string }>`
  border-radius: 0.5rem;
  background-color: #008B8B;
  border: none;
  cursor: pointer;
  padding: 0.4rem 0.8rem;
    color: #FFF;
    font-size: 16px;
  &:hover {
    background-color:#029b9b;
  }
`;
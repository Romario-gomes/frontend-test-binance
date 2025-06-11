import { styled } from "styled-components";

export const MenuButton = styled.button`
  cursor: pointer;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1100;
  background: none;
  border: none;
  color: #000;

  @media (min-width: 1024px) {
    display: none;
  }
`;
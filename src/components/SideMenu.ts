import { styled } from "styled-components";

export const SideMenu = styled.div`
    overflow: scroll;
    flex: 1;
    margin: 1rem 0.25rem;
    border-radius: 0.5rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    padding: 0.5rem;
    transition: transform 0.3s ease;

    @media (max-width: 1024px) {
    margin: 0;
    background-color: #fff;
    position: absolute;
    border-radius: 0;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transform: translateX(-110%);
    &.open {
      transform: translateX(0);
    }
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.5);
    flex: none;
  }
`; 

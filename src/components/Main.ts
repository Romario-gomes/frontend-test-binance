import { styled } from "styled-components";

export const Main = styled.div`
    flex: 3;
    margin: 1rem 0.25rem;
    border-radius: 0.5rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    padding: 0.5rem;
    overflow: scroll;

    @media (max-width: 1024px) {
      width: 100%;
      margin: 0;
      border-radius: 0;
    }

`
import { styled } from "styled-components";

export const Container = styled.div`
`

export const Table = styled.table`
    width: 100%;
    border: 1px solid;
    border-collapse: collapse;
    text-align: start;
    margin-top: 20px;
`

export const Th = styled.th`
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;

    @media (max-width: 1024px) {
        padding: 0px;
        font-size: 12px;
    }
`

export const Thead = styled.thead`
    background-color: #ddd;

     @media (max-width: 1024px) {
      display: none;
    }
`

export const Td = styled.td`
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;   

    

    @media (max-width: 1024px) {
      display: flex;
      justify-content: space-between;


      &:first-of-type {
        font-weight: bold;
        size: 1.2rem;
        text-align: center;
        display: block;
        }
        &:not(:first-of-type):before {
            content: attr(data-title);
            display: block;
            font-weight: bold;
        }
    }

`

export const Tr = styled.tr`
    @media (max-width: 1024px) {
      display: block;
    }
`
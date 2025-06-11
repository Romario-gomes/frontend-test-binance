import styled from "styled-components";

export const Main = styled.div`
    margin-bottom: 10px;
`
export const Content = styled.div`
    position relative;
    
    button {
        height: 40px;
        width: 100%;
        position: sticky;
        bottom: 0;

    }
`


export const Table = styled.table`
    width: 100%;
    border: 1px solid;
    border-collapse: collapse;
    text-align: start;
    margin-top: 20px;
    layout: fixed;
`

export const Th = styled.th`
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;

    @media (max-width: 1024px) {
        padding: 4px;
    }
`

export const Thead = styled.thead`
    background-color: #ddd;
`

export const Td = styled.td`
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;   

    @media (max-width: 1024px) {
      padding: 2px;
    }
`

export const Tr = styled.tr`
`
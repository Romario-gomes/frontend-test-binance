import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  margin-right: 10px;
  input {
    width: 100%;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    height: 40px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;
    box-sizing: border-box;

    &::placeholder{
      color: #BCBCBC;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    display: flex; 
    justify-content: flex-end;

    input, select {
      width: 90%;
    }
  }

  @media (max-width: 425px) {
    width: 100%;
    display: flex; 
    justify-content: flex-end;

    input, select {
      width: 80%;
    }
  }
`;

export const Header = styled.div`
  display: flex;
`

export const Select = styled.select`
    width: 100%;
    background: #fff;
    border: 1px solid #;
    border-radius: 8px;
    height: 40px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder{
      color: #BCBCBC;
    }
`;

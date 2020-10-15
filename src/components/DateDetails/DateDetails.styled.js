import styled from "styled-components";

export const DateForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 90vh;
  width: 100vw;
  overflow: hidden;
`;

export const SelectWrapper = styled.div`
  width: 100vw;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Select = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px;

  @media (min-width: 768px) {
    width: 30%;
  }
  @media (min-width: 1440px) {
    width: 20%;
  }
`;

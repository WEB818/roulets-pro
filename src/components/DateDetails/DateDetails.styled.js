import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

export const DateForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100vw;

  @media (min-width: 768px) {
    margin-top: 50%;
  }

  @media (min-width: 1440px) {
    margin-top: 10%;
  }
`;

export const SelectWrapper = styled.div`
  width: 100vw;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 1440px) {
    width: 100vw;
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: no-wrap;
  }
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

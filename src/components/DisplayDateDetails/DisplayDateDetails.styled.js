import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 10px;
`;
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin: 20px;

  @media (min-width: 768px) {
    width: 30%;
  }
  @media (min-width: 1440px) {
    width: 20%;
  }
`;

export const MapContainer = styled.iframe`
  width: 100%;
  height: 300px;
  border: none;

  @media (min-width: 768px) {
    width: 50%;
    height: 400px;
  }

  @media (min-width: 1440px) {
    width: 40%;
    height: 600px;
  }
`;

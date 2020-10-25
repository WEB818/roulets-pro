import styled from "styled-components";

export const Container = styled.div`
  margin-top: 7vh;

  width: 100%;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 10px;
`;

export const MapContainer = styled.iframe`
  width: 100%;
  height: 280px;
  border: none;

  @media (min-width: 768px) {
    width: 60%;
    height: 400px;
  }

  @media (min-width: 1440px) {
    height: 600px;
  }
`;

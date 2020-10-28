import styled from "styled-components";

export const PrevSpinList = styled.div`
  padding-bottom: 30px;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    position: absolute;
    width: 40%;
    top: 20%;
    right: 3%;
  }
  @media (min-width: 1440px) {
    top: 15%;
  }
`;
export const ListContainer = styled.div`
  width: 90%;
  height: 320px;
  margin: 0 auto;
  background-color: #ea4b8b25;

  @media (min-width: 768px) {
    margin-top: 30px;
    height: 400px;
  }

  @media (min-width: 1440px) {
    margin-top: 0px;
    height: 600px;
  }
`;

import styled from "styled-components";

export const HowItWorks = styled.h1`
  font-family: "Courgette", cursive;
  text-decoration: underline;
  font-weight: normal;
  color: #ea4b8b;

  @media (min-width: 1440px) {
    color: white;
  }
`;
export const ListItem = styled.li`
  text-align: left;
  padding: 0 20px;
`;
export const Instructions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 60% 0 0 0;
  }
  @media (min-width: 1440px) {
    padding: 20% 0 0 0;
    color: white;
  }
`;

import styled, { keyframes } from "styled-components";

export const Circle = styled.div`
  padding: 0;
  margin: 0;

  @media (min-width: 768px) {
    height: 0;
  }
`;

export const TextPath = styled.text`
  fill: #ffffff;
  font-family: "Courgette", cursive;
  font-size: 30px;
`;

const dash = keyframes`
to {
  stroke-dashoffset: -20000;
}
`;

export const Path = styled.path`
  stroke-dasharray: 800;
  animation: ${dash} 5s forwards;
`;

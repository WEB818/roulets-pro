import styled, { keyframes } from "styled-components";

export const WheelContainer = styled.div`
  position: relative;
`;

export const Wheel = styled.div`
  background: pink;
  border-radius: 50%;

  height: 10rem;
  width: 10rem;
`;

const spin = keyframes`
100% { 
  motion-offset: 100%;
  offset-distance: 100%;
}
`;

export const BallBearing = styled.div`
  background: black;
  border-radius: 50%;
  offset-path: polygon(30% 0%, 70% 0%, 100% 50%, 30% 100%, 0% 70%, 0% 30%);
  height: 1rem;
  width: 1rem;

  animation: ${spin} 2s linear infinite;
`;
export const Roulette = styled.svg`
  width: 100vw;
  height: 100vh;
`;

import React from "react";
import {
  WheelContainer,
  Wheel,
  BallBearing,
  Roulette,
  Circle,
} from "./SpinningWheel.styled";
import "./SpinningWheel.css";

export default function SpinningWheel(props) {
  const {
    size,
    progress,
    strokeWidth,
    circleOneStroke,
    circleTwoStroke,
  } = props;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <WheelContainer>
      <Roulette viewbox="100 100 100 100">
        <path
          className="track"
          fill="red"
          stroke-width="100"
          d="M 5 5 m -4, 0 a 4,4 0 1,0 8,0 a 4,4 0 1,0 -8,0"
        />
        <circle className="marker" r="1" fill="orange"></circle>
      </Roulette>
    </WheelContainer>
  );
}

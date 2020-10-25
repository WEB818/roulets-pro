import React from "react";

import { Spinner } from "./SpinAgain.styled";

export default function SpinAgain(props) {
  return (
    <Spinner>
      <p>Spin Count: {props.count}</p>
    </Spinner>
  );
}

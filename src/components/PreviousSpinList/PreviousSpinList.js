import React from "react";
import PreviousSpin from "../PreviousSpin/PreviousSpin";
import { PrevSpinList } from "./PreviousSpinList.styled";

export default function PreviousSpinList(props) {
  return (
    <PrevSpinList>
      {props.playAgain && <h4>Previous 10 Spins</h4>}

      {props.lastTen.map((spin, idx) => (
        <PreviousSpin
          key={spin.id}
          idx={idx}
          name={spin.name}
          url={spin.url}
          prevSpins={props.prevSpins}
          length={props.prevSpins.length}
        />
      ))}
    </PrevSpinList>
  );
}

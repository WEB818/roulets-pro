import React from "react";
import PreviousSpin from "../PreviousSpin/PreviousSpin";
import { PrevSpinList, ListContainer } from "./PreviousSpinList.styled";

export default function PreviousSpinList(props) {
  return (
    <PrevSpinList>
      <h4>Previous 10 Spins</h4>
      <ListContainer>
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
      </ListContainer>
    </PrevSpinList>
  );
}

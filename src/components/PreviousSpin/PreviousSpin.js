import React from "react";
import { LinkTo } from "../Utils/Utils.styled";
import { Item } from "./PreviousSpin.styled";

export default function PreviousSpin(props) {
  let idx = props.idx + 1;
  return (
    <LinkTo href={props.url} target="_blank" rel="noopener noreferrer">
      <Item>
        {idx}. {props.name}
      </Item>
    </LinkTo>
  );
}

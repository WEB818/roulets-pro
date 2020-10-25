import React, { Component } from "react";

import { Circle, TextPath, Path } from "./Header.styled";

export default class Header extends Component {
  render() {
    let textPath = `<textPath xlink:href="#curve">................Roulet's Go Out....................................</textPath>`;
    return (
      <Circle>
        <svg viewBox="0 0 400 400">
          <Path
            onClick={this.props.redirect}
            id="curve"
            stroke="white"
            strokeWidth="50"
            d="M 100, 100
            m 0, 0
            a 100,100 0 1,0 200,0
            a 100,100 0 1,0 -200,0
            "
            fill="#EA4B8B"
          />

          <TextPath
            className="text-path"
            dangerouslySetInnerHTML={{ __html: textPath }}
          ></TextPath>
        </svg>
      </Circle>
    );
  }
}

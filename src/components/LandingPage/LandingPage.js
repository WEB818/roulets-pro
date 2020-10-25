import React, { Component } from "react";

import Header from "../Header/Header";
import {
  HowItWorks,
  ListItem,
  Instructions,
} from "../LandingPage/LandingPage.styled";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
    };
  }

  render() {
    return (
      <Instructions>
        <HowItWorks>How It Works</HowItWorks>
        <ol>
          <ListItem>Click on Roulet's Go Out wheel to get started.</ListItem>
          <ListItem>Pick an activity and location.</ListItem>
          <ListItem>
            Use the map to navigate to your randomly picked location.
          </ListItem>
        </ol>

        <Header redirect={this.redirectToPlay} />
      </Instructions>
    );
  }
}

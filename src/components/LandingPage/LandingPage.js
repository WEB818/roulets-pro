import React from "react";
import { Link } from "react-router-dom";
import {
  HowItWorks,
  ListItem,
  Instructions,
} from "../LandingPage/LandingPage.styled";
import { Button } from "../Utils/Utils.styled";

export default function LandingPage() {
  return (
    <>
      <Instructions>
        <HowItWorks>How It Works</HowItWorks>
        <ol>
          <ListItem>Pick an activity and location</ListItem>
          <ListItem>Play Roulet's go out!</ListItem>
          <ListItem>Ask me out</ListItem>
        </ol>
        <Link to="/play">
          <Button>Get Started</Button>
        </Link>
      </Instructions>
    </>
  );
}

import React, { Component } from "react";
import config from "../../config";

import {
  MapContainer,
  Container,
  DetailContainer,
} from "./DisplayDateDetails.styled";
import { LinkTo, Button } from "../Utils/Utils.styled";
export default class DisplayDate extends Component {
  displayMap(location) {
    let url = location.replace(/\s/g, "+");

    return (
      <MapContainer
        src={`https://www.google.com/maps/embed/v1/place?key=${config.MAPS_EMBED_API_KEY}&q=${url}`}
        title="map of location"
        allowFullScreen
      ></MapContainer>
    );
  }

  displayRating(rating) {
    if (rating > 4.4 && this.props.restaurant) {
      return (
        <div>
          <h3>
            <LinkTo
              href={this.props.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.props.restaurant}
            </LinkTo>{" "}
            is rated {rating} out of 5. You have good taste!
          </h3>
        </div>
      );
    } else if (this.props.restaurant) {
      return (
        <h3>
          <LinkTo
            href={this.props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.restaurant}
          </LinkTo>
        </h3>
      );
    }
  }

  displayType(type) {
    if (type === "walk") {
      return "a walk";
    } else if (type === "coffee tea outdoor seating") {
      return "coffee or tea";
    } else {
      return type.split(" ")[0];
    }
  }

  renderDateDetails() {
    let score = this.displayRating(this.props.rating);
    let type = this.displayType(this.props.type);
    let map = this.displayMap(this.props.restaurant);
    return (
      <DetailContainer>
        <h1>Roulet's go here for {type}!</h1>
        {score}
        {map}
      </DetailContainer>
    );
  }

  render() {
    return (
      <Container>
        {this.renderDateDetails()}
        <Button onClick={this.props.replay}>Spin Again</Button>
      </Container>
    );
  }
}

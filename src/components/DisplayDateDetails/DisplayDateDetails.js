import React, { Component } from "react";
import config from "../../config";
import DateRequest from "../DateRequest/DateRequest";
import {
  MapContainer,
  Container,
  BtnContainer,
} from "./DisplayDateDetails.styled";
import { Button, LinkTo } from "../Utils/Utils.styled";
export default class DisplayDate extends Component {
  constructor(props) {
    super(props);
    this.state = { setDate: false };
  }

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

  displayMessage(price) {
    if (price === "$$$$") {
      return (
        <div>
          <h2>Baby, I'm worth it.</h2>
          <iframe
            src="https://giphy.com/embed/d47IFWkfzgr4DASQ"
            title="worth it giphy"
            alt="worth it giphy"
            width="480"
            height="270"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      );
    }
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
    } else if (type === "picnic") {
      return "a picnic";
    } else if (type === "coffee tea outdoor seating") {
      return "coffee or tea";
    } else {
      return type.split(" ")[0];
    }
  }

  itsADate = () => {
    this.setState({ setDate: true });
  };

  renderDateDetails() {
    let description = this.displayMessage(this.props.price);
    let score = this.displayRating(this.props.rating);
    let type = this.displayType(this.props.type);
    let map = this.displayMap(this.props.restaurant);
    return (
      <Container>
        <h1>Roulet's go here for {type}!</h1>
        {score}
        {map}
        {description}
        <BtnContainer>
          <Button onClick={this.props.replay}>Spin Again</Button>
          <Button onClick={this.props.dateRequest}>Ask Me Out</Button>
        </BtnContainer>
      </Container>
    );
  }

  render() {
    const { itsADate } = this.props;

    return (
      <>
        {itsADate ? (
          <DateRequest
            place={this.props.restaurant}
            address={this.props.address}
          />
        ) : (
          this.renderDateDetails()
        )}
      </>
    );
  }
}

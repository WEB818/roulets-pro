import React, { Component } from "react";

import DisplayDateDetails from "../DisplayDateDetails/DisplayDateDetails";
import SpinAgain from "../SpinAgain/SpinAgain";
import {
  DateForm,
  SelectWrapper,
  Select,
  DetailContainer,
} from "./DateDetails.styled";
import { Label, Input, Selection, Button } from "../Utils/Utils.styled";
import PreviousSpinList from "../PreviousSpinList/PreviousSpinList";

export default class DateDetails extends Component {
  handleSubmit = (ev) => {
    let length = this.props.prevSpins.length;

    this.props.getLocation(ev);
    this.props.spinCount();
    this.props.handleList(length);
  };

  renderForm() {
    return (
      <DateForm onSubmit={(ev) => this.handleSubmit(ev)}>
        <SelectWrapper>
          <Select>
            <Label htmlFor="type">What should we do?</Label>

            <Selection
              id="type"
              name="type"
              onChange={(ev) => this.props.onChange(ev)}
            >
              <option value="fun">Something fun!</option>
              <option value="coffee tea outdoor seating + takeout">
                Coffee or Tea
              </option>
              <option value="brunch outdoor seating + takeout">Brunch</option>
              <option value="lunch outdoor seating + takeout">Lunch</option>
              <option value="dinner outdoor seating + takeout">Dinner</option>
              <option value="drinks outdoor seating + takeout">Drinks</option>
              <option value="dessert outdoor seating + takeout">Dessert</option>
              <option value="walk">Go for a walk</option>
            </Selection>
          </Select>
          <Select>
            <Label htmlFor="location">Where?</Label>
            <Input
              id="location"
              type="text"
              name="location"
              placeholder="City/state or zip code"
              required
            />
          </Select>
          <Button>Roulet's Play!</Button>
        </SelectWrapper>
      </DateForm>
    );
  }

  renderDetails() {
    return (
      <DisplayDateDetails
        type={this.props.type}
        restaurant={this.props.restaurant}
        address={this.props.address}
        price={this.props.price}
        rating={this.props.rating}
        link={this.props.link}
        replay={this.props.replay}
      />
    );
  }

  render() {
    const { details, count, error, prevSpins, playAgain, lastTen } = this.props;
    return (
      <>
        {error ? <p>Something went wrong. Please play again later.</p> : ""}
        {details ? (
          <DetailContainer>
            {this.renderDetails()}
            <SpinAgain count={count} />
            <PreviousSpinList
              prevSpins={prevSpins}
              playAgain={playAgain}
              lastTen={lastTen}
            />
          </DetailContainer>
        ) : (
          <div>{this.renderForm()}</div>
        )}
      </>
    );
  }
}

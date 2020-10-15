import React, { Component } from "react";

import DisplayDateDetails from "../DisplayDateDetails/DisplayDateDetails";
import { DateForm, SelectWrapper, Select } from "./DateDetails.styled";
import { Label, Input, Selection, Button } from "../Utils/Utils.styled";

export default class DateDetails extends Component {
  renderForm() {
    return (
      <DateForm onSubmit={(ev) => this.props.getLocation(ev)}>
        <SelectWrapper>
          <Select>
            <Label htmlFor="type">What should we do?</Label>

            <Selection
              id="type"
              name="type"
              onChange={(ev) => this.props.onChange(ev)}
            >
              <option value="fun">I'm up for anything!</option>
              <option value="coffee tea outdoor seating + takeout">
                Coffee or Tea
              </option>
              <option value="brunch outdoor seating + takeout">Brunch</option>
              <option value="lunch outdoor seating + takeout">Lunch</option>
              <option value="dinner outdoor seating + takeout">Dinner</option>
              <option value="drinks outdoor seating + takeout">Drinks</option>
              <option value="dessert outdoor seating + takeout">Dessert</option>
              <option value="walk">Go for a walk</option>
              <option value="picnic">Go on a picnic</option>
            </Selection>
          </Select>
          <Select>
            <Label htmlFor="location">Where?</Label>
            <Input
              id="location"
              type="text"
              name="location"
              placeholder="btw, I live in Berkeley"
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
        dateRequest={this.props.dateRequest}
        itsADate={this.props.itsADate}
      />
    );
  }
  render() {
    const { details, error } = this.props;
    return (
      <>
        {error ? <p>Something went wrong. Please play again later.</p> : ""}
        {details ? (
          <div>{this.renderDetails()}</div>
        ) : (
          <div>{this.renderForm()}</div>
        )}
      </>
    );
  }
}

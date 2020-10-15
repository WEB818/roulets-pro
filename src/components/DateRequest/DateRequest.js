import React, { Component } from "react";
import config from "../../config";
import {
  Container,
  Form,
  LabelContainer,
  Message,
  SignOff,
} from "./DateRequest.styled";
import {
  Button,
  Input,
  Label,
  Selection,
  TextArea,
} from "../Utils/Utils.styled";
export default class DateRequest extends Component {
  state = {
    showInput: false,
    methodOfContact: "",
    dateDetails: "",
    successMessage: false,
    error: null,
  };

  displayInputs(input) {
    const { showInput, methodOfContact } = this.state;
    let label;
    let type;
    if (showInput) {
      if (methodOfContact === "text") {
        label = "your phone number";
        type = "tel";
      }
      if (methodOfContact === "email") {
        label = "your email";
        type = "email";
      }
      if (methodOfContact === "app") {
        label = "dating app and username";
        type = "text";
      }
      return (
        <LabelContainer>
          <Label htmlFor={input}>Enter {label}</Label>
          <Input id={input} type={type} name="contact" />
        </LabelContainer>
      );
    }
  }

  selectMethodOfContact(method) {
    this.setState({ showInput: true, methodOfContact: method });
  }

  editDetails = (ev) => {
    this.setState({ dateDetails: ev.target.value });
  };

  postEmail = (ev) => {
    ev.preventDefault();

    return fetch(`${config.CONTACT_API_ENDPOINT}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Access-Control-Request-Method": "POST",
        "Access-Control-Allow-Origin": "https://roulets-go-out.vercel.app/",
      },
      body: JSON.stringify({
        name: ev.target.name.value,
        method: ev.target.method.value,
        contact: ev.target.contact.value,
        content: ev.target.content.value,
        message: ev.target.message.value,
      }),
    })
      .then((res) =>
        !res.ok ? res.json().then((err) => Promise.reject(err)) : res.json()
      )
      .then(() => {
        this.setState({ successMessage: true });
      })
      .catch((err) => {
        this.setState({ error: err.message });
      });
  };

  componentDidMount() {
    let details = `Meeting place: ${this.props.place} \nAddress: ${this.props.address} \nWhen: `;
    this.setState({ dateDetails: details });
  }

  renderForm() {
    return (
      <Form onSubmit={this.postEmail}>
        <Input
          type="text"
          name="name"
          placeholder="What's your name?"
          required
        />
        <Selection
          id="method"
          name="method"
          required
          onChange={(ev) => this.selectMethodOfContact(ev.target.value)}
        >
          <option value="">Method of contact</option>
          <option value="text">Text/Call</option>
          <option value="email">Email</option>
          <option value="app">Dating App</option>
        </Selection>
        {this.displayInputs(this.state.methodOfContact)}
        <Label htmlFor="details">Fill in the details</Label>
        <TextArea
          id="details"
          name="content"
          value={this.state.dateDetails}
          onChange={(ev) => this.editDetails(ev)}
        />
        <Label htmlFor="message">Add message (optional)</Label>
        <TextArea id="message" name="message" />
        <Button>Send message</Button>
      </Form>
    );
  }

  renderSuccessMessage() {
    return (
      <Message>
        <p>Thanks for sending me the details. I'll reply to you soon!</p>
        <SignOff>xo, Amy</SignOff>
      </Message>
    );
  }

  render() {
    const { successMessage, error } = this.state;
    return (
      <Container>
        {error && <p>Something went wrong. Please try again.</p>}
        {successMessage ? this.renderSuccessMessage() : this.renderForm()}
      </Container>
    );
  }
}

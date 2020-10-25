import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import config from "./config";

import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import DateDetails from "./components/DateDetails/DateDetails";

import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      restaurant: "",
      prevSpins: [],
      lastTen: [],
      count: 0,
      type: "fun",
      showDetails: false,
      replay: false,
      redirect: false,
      error: "",
    };
  }

  countSpins = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  getRandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  handleSearch = (busObj) => {
    let arr = busObj.businesses;
    let length = arr.length - 1;
    let index = this.getRandomIndex(length);
    let restaurant = arr[index];

    this.setState({
      restaurants: arr,
      restaurant: restaurant,
      showDetails: true,
      error: "",
    });
  };

  handleTypeChange = (ev) => {
    this.setState({ type: ev.target.value });
  };

  handleError = (err) => {
    this.setState({ error: err.message });
    console.log(err.message);
  };

  handlePlay = (ev) => {
    ev.preventDefault();
    let location = ev.target.location;
    let term = ev.target.type;

    return fetch(
      `${config.API_ENDPOINT}/search?location=${location.value}&term=${term.value}&limit=50`,
      {
        headers: {
          Authorization: `Bearer ${config.API_KEY}`,
          "Access-Control-Allow-Origin":
            "https://roulets-go-out.vercel.app/play",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((businesses) => this.handleSearch(businesses))
      .catch((err) => this.handleError(err));
  };

  handleReplay = () => {
    let prevResults = this.state.prevSpins;
    prevResults.push(this.state.restaurant);
    this.setState({
      restaurant: "",
      showDetails: false,
      prevSpins: [...prevResults],
      replay: true,

      error: "",
    });
  };

  handleLastTenSpins = (first) => {
    let last = first - 10 >= 0 ? first - 10 : 0;
    let limit = first - 1;

    let runningList = [];
    for (let i = limit; i >= last; i--) {
      let prevSpins = this.state.prevSpins;
      runningList.push(prevSpins[i]);
    }

    this.setState({
      lastTen: runningList,
    });
  };

  setRedirect = () => {
    this.setState({
      redirect: !this.state.redirect,
    });
  };
  redirectToPlay = () => {
    if (this.state.redirect) {
      return <Redirect to="/play" />;
    } else {
      return <Redirect to="/" />;
    }
  };

  render() {
    const {
      restaurant,
      type,
      count,
      prevSpins,
      replay,
      lastTen,
      showDetails,
    } = this.state;

    return (
      <div>
        {this.redirectToPlay()}
        {!showDetails && (
          <Header spinCount={this.countSpins} redirect={this.setRedirect} />
        )}
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/play">
            <DateDetails
              getLocation={this.handlePlay}
              type={type}
              restaurant={restaurant.name}
              replay={this.handleReplay}
              onChange={this.handleTypeChange}
              details={this.state.showDetails}
              price={restaurant ? restaurant.price : ""}
              rating={restaurant ? restaurant.rating : ""}
              address={
                restaurant ? restaurant.location.display_address.join(", ") : ""
              }
              link={restaurant ? restaurant.url : ""}
              placeId={restaurant ? restaurant.id : ""}
              error={this.state.error}
              spinCount={this.countSpins}
              count={count}
              prevSpins={prevSpins}
              playAgain={replay}
              handleList={this.handleLastTenSpins}
              lastTen={lastTen}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;

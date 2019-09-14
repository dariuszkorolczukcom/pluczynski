import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../css/App.scss';
import homeImage from '../css/img/patryk_main.jpg';
import LoadingComponent from "../Components/LoadingComponent";
import HomeContainer from "./HomeContainer";
import HeaderContainer from "./HeaderContainer";
import FooterContainer from "./FooterContainer";
import PlayerContainer from "./PlayerContainer";

export default class AppContainer extends React.Component {
  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${homeImage})`, backgroundSize: "cover" }}>
        {/* <HeaderContainer /> */}
        <Router>
          <HeaderContainer />
          <Route exact path="/" component={HomeContainer} />
          <Route path="/music" component={<div></div>} />
          <Route path="/gallery" component={<div></div>} />
          <Route path="/links" component={<div></div>} />
          <Route path="/about" component={<div></div>} />
        </Router>
        <PlayerContainer />
        <FooterContainer />
      </div>

    );
  }
}
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../css/App.scss';
import homeImage from '../css/img/patryk_main.jpg';
// import LoadingComponent from "../Components/LoadingComponsent";
import HomeContainer from "./HomeContainer";
import HeaderContainer from "./HeaderContainer";
import AboutContainer from "./AboutContainer";
import LinksContainer from "./LinksContainer";
import GalleryComponent from "../Components/GalleryComponent";
import FooterContainer from "./FooterContainer";
import PlayerContainer from "./PlayerContainer";

export default class AppContainer extends React.Component {
  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${homeImage})`, backgroundSize: "cover" }}>
        <Router>
          <HeaderContainer />
          <Route exact path="/" component={HomeContainer} />
          <Route path="/music" component={() => <PlayerContainer open={true} />} />
          <Route path="/gallery" component={() => <GalleryComponent open={true} />} />
          <Route path="/links" component={LinksContainer} />
          <Route path="/about" component={AboutContainer} />
        </Router>
        <FooterContainer />
      </div>

    );
  }
}
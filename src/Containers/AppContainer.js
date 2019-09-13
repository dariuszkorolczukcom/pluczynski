import React from 'react';
import '../css/App.scss';
import homeImage from '../css/img/patryk_main.jpg';
// import LoadingComponent from "../Components/LoadingComponent";
import HomeContainer from "./HomeContainer";
import HeaderContainer from "./HeaderContainer";
import FooterContainer from "./FooterContainer";

export default class AppContainer extends React.Component {
  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${homeImage})`, backgroundSize: "cover" }}>
        <React.Fragment>
          <HeaderContainer />
          <HomeContainer />
          <FooterContainer />
        </React.Fragment>
      </div>

    );
  }
}
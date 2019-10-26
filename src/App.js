import React, { Component } from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Player from "./Components/Player";
import Gallery from "./Components/Gallery";
import Testimonials from "./Components/Testimonials";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import resumeData from "./resumeData";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { keys: [], dragon: false };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }


  showUrl = () => {
    var i, n, s = '';

    for (i = 0; i < 10; i++) {
      n = Math.floor(Math.sin((performance.now() / 200) + (i / 2)) * 4) + 4;

      s += String.fromCharCode(0x2581 + n);
    }

    //document.body.innerHTML = s;
    //history.pushState({}, null, s);
    window.location.hash = s;

    setTimeout(this.showUrl, 50);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(event) {
    console.log(event.keyCode)
    if (this.state.dragon === false) {
      if (event.keyCode === 51) {
        let newKeys = [51]
        this.setState({ keys: newKeys })
      } else if (event.keyCode === 50) {
        if (this.state.keys = [51]) {
          let newKeys = [51, 50]
          this.setState({ keys: newKeys })
        } else {
          this.setState({ keys: [] })
        }
      } else if (event.keyCode === 49) {
        if (this.state.keys = [51, 50]) {
          let newKeys = [51, 50, 49]
          this.setState({ keys: newKeys })
        } else {
          this.setState({ keys: [] })
        }
      } else if (event.keyCode === 54) {
        if (this.state.keys = [51, 50, 49]) {
          let newKeys = [51, 50, 49, 54]
          this.setState({ keys: newKeys })
        } else {
          this.setState({ keys: [] })
        }
      } else if (event.keyCode === 55) {
        if (this.state.keys = [51, 50, 49, 54]) {
          this.runDragon()
        } else {
          this.setState({ keys: [] })
        }
      } else if (event.keyCode === 99) {
        let newKeys = [99]
        this.setState({ keys: newKeys })
      } else if (event.keyCode === 98) {
        if (this.state.keys = [99]) {
          let newKeys = [99, 98]
          this.setState({ keys: newKeys })
        } else {
          this.setState({ keys: [] })
        }
      } else if (event.keyCode === 97) {
        if (this.state.keys = [99, 98]) {
          let newKeys = [99, 98, 97]
          this.setState({ keys: newKeys })
        } else {
          this.setState({ keys: [] })
        }
      } else if (event.keyCode === 102) {
        if (this.state.keys = [99, 98, 97]) {
          let newKeys = [99, 98, 97, 102]
          this.setState({ keys: newKeys })
        } else {
          this.setState({ keys: [] })
        }
      } else if (event.keyCode === 103) {
        if (this.state.keys = [99, 98, 97, 102]) {
          this.runDragon()
        } else {
          this.setState({ keys: [] })
        }
      } else {
        this.setState({ keys: [] })
      }
    }
  }

  runDragon = () => {
    this.setState({ dragon: true })
    setTimeout(() => { this.setState({ dragon: false }); }, 6000);
  }

  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} showUrl={this.showUrl} />
        {/* <Player resumeData={resumeData} showUrl={this.showUrl} />
        <Gallery resumeData={resumeData} /> */}
        <Testimonials resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
        {this.state.dragon &&
          <img alt="dragon" className="dragon" src="css/dragon.gif" />
        }
      </div>
    );
  }
}

export default App;

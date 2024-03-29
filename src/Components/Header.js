import React, { Component } from "react";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Production
                </a>
              </li>
              {/* <li>
                <a className="smoothscroll" href="#skills">
                  Skills
                </a>
              </li> */}
              {/* <li>
                <a className="smoothscroll" href="#portfolio">
                  Music
                </a>
              </li> */}
              {/* <li>
                <a className="smoothscroll" href="#gallery">
                  Gallery
                </a>
              </li> */}
              <li>
                <a className="smoothscroll" href="#testimonials">
                  Quotes
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline" style={{ fontFamily: "'Six Caps', sans-serif", letterSpacing: "2px" }}>Patryk Luczynski</h1>
              <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                music production
              </h3>
              <hr />
              <ul className="social">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map(item => {
                    return (
                      <li key={item.name}>
                        <a className={"icon"} href={item.url} target="_blank">
                          {/* <svg viewBox="0 0 32 32"> */}
                          <div className={item.icon}></div>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
      </React.Fragment >
    );
  }
}

import React, { Component, Fragment } from "react";
import YouTubePlayer from 'react-player/lib/players/YouTube';
export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    }
  }
  render() {
    let resumeData = this.props.resumeData;
    return (
      <Fragment>
        <section id="resume">
          <div className="row work">
            <div className="two columns header-col">
              <h1>
                <span>Production</span>
              </h1>
            </div>

            <div className="ten columns main-col">
              {resumeData.albums &&
                resumeData.albums.map(item => {
                  return (
                    <div className="row item">
                      <div className="four columns">
                        <img alt={item.band + " " + item.title} src={item.cover} />
                      </div>
                      <div className="four columns">
                        <h3>{item.band}</h3>
                        <p className="info">
                          {item.title}
                          <span>&bull;</span>{" "}
                          <em className="date">
                            {item.date}
                          </em>
                        </p>
                      </div>
                      <div className="four columns">
                        <div style={{ width: "80%", padding: "10px" }}>
                          <YouTubePlayer onPlay={this.props.showUrl} controls width="320px" height="180px" url={item.url} />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </Fragment>);
  }
}

import React, { Component, Fragment } from "react";
import ReactPlayer from 'react-player'
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <Fragment>
        <section id="resume">
          {/* <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div> */}

          {/* <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map(item => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div> */}
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
                        <img src={item.cover} />
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
                          <ReactPlayer width="320px" height="180px" url={item.url} />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
        {/* <section id="skills">
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{resumeData.skillsDescription}</p>

              <div className="bars">
                <ul className="skills">
                  {resumeData.skills &&
                    resumeData.skills.map(item => {
                      return (
                        <li>
                          <span
                            className={`bar-expand ${item.skillname.toLowerCase()}`}
                          ></span>
                          <em>{item.skillname}</em>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </section> */}
      </Fragment>);
  }
}

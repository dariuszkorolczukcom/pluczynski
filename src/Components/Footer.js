import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map(item => {
                  return (
                    <li>
                      <a href={item.url}>
                        <i className={item.className} />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
        <span>&copy; <a rel="noopener noreferrer" href="https://dariuszkorolczuk.com/" target="_blank">Dariusz Korolczuk</a> 2019</span>
      </footer>
    );
  }
}

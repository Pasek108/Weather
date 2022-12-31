import React from "react";
import "../App.css";

export default class SearchCity extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => (document.querySelector(".search").value = "");

  render() {
    return (
      <div className="searchCity">
        <input
          className="search blur"
          type="text"
          onClick={this.handleClick}
          onKeyUp={this.props.searchChange}
          placeholder={this.props.lang.words.change_localisation}
        />

        <div className={`locations ${this.props.locations.length ? "active" : ""}`}>{this.props.locations}</div>
      </div>
    );
  }
}

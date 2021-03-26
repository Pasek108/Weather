import React from 'react';
import '../App.css';

export default class SearchCity extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = () => this.props.handleChange(document.getElementById("search"));
    handleClick = () => document.getElementById("search").value = "";

    render() {
        return (
            <div className="searchCity">
                <input className="search"
                    onClick={this.handleClick}
                    onMouseOut={this.props.onMouseOut}
                    onKeyUp={this.handleChange}
                    id="search" type="text"
                    placeholder={this.props.lang.words.change_localisation} />

                <div className="locations">
                    {this.props.locations}
                </div>
            </div>
        );
    }
}
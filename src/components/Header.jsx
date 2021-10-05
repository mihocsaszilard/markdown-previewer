import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        {this.props.text}
        <div id="btn-container">
          <div className="btn"></div>
          <div className="btn2"></div>
        </div>
      </div>
    );
  }
}

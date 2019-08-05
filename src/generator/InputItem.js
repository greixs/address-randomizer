// import M from "materialize-css";

import React, { Component } from "react";

export default class InputItem extends Component {
  render() {
    return (
      <div className="col l6 m6 s12">
        <label className="item-label" htmlFor={this.props.name}>
          {this.props.name}
        </label>
        <input
          name={this.props.name}
          className="input-field inline"
          type="text"
          value={this.props.value !== null ? this.props.value : ""}
          disabled
        />
      </div>
    );
  }
}

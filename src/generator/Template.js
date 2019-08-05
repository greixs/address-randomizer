import React, { Component } from "react";
import InputItem from "./InputItem";

export default class Template extends Component {
  render() {
    const { details } = this.props;
    return (
      <div className="container">
        <div className="row">
          {Object.keys(details).map((key, index) => (
            <InputItem key={index} name={key} value={details[key]} />
          ))}
        </div>
      </div>
    );
  }
}

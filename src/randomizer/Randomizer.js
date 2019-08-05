import React, { Component } from "react";
import Email from "./Email";
import Address from "./Address";

export default class Randomizer extends Component {
  render() {
    return (
      <div>
        <Email />
        <br />
        <Address />
      </div>
    );
  }
}

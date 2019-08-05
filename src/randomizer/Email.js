import React, { Component } from "react";
import isEmail from "validator/lib/isEmail";

export default class Email extends Component {
  constructor(props) {
    super(props);

    this.maxGenerated = 5;

    this.state = {
      isValid: false,
      result: null
    };
    this.inputRef = React.createRef();
    this.resultRef = React.createRef();
  }

  validateInput = event => {
    const value = event.target.value;

    if (isEmail(value)) {
      this.setState({
        isValid: true
      });
    } else {
      this.setState({
        isValid: false
      });
    }
  };

  randomizeEmail = event => {
    event.preventDefault();
    console.log("randomizing email....");
    const result = this.generateEmails(this.inputRef.current.value);
    console.log(result);
    this.setState({
      result: result.join("\r\n")
    });
  };

  generateEmails(username) {
    var hostname = username.split("@")[0];
    var domain = username.split("@")[1];
    var username_length = hostname.length;
    var combinations = Math.pow(2, username_length - 1);
    var result = [];

    // will only generate 100 emails
    for (var i = 0; i < combinations && i < 100; i++) {
      var bin = this.decbin(i, username_length - 1);
      var full_email = "";
      for (var j = 0; j < username_length - 1; j++) {
        full_email += hostname[j];
        if (bin[j] === 1) {
          full_email += ".";
        }
      }
      full_email += username[j] + "@" + domain;
      console.log(full_email);
      result.push(full_email);
    }

    //select 5 randomly selected emails
    return result.sort(() => 0.5 - Math.random()).slice(0, 5);
  }

  decbin(dec, length) {
    var out = "";
    while (length--) out += (dec >> length) & 1;
    return out;
  }

  render() {
    return (
      <div>
        <h1>Email</h1>
        <p>
          generate different email that will directs to same email. This is used
          with email dot trick technique.
        </p>
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Put Your Email"
            onChange={this.validateInput}
            ref={this.inputRef}
            required
          />
          <button
            className="btn"
            onClick={this.randomizeEmail}
            disabled={!this.state.isValid}
          >
            Randomize Email
          </button>
          <pre id="emailResult" ref={this.resultRef}>
            {" "}
            {this.state.result}
          </pre>
        </form>
      </div>
    );
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }
}

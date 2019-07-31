import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "justin"
    };
    this.inputRef = React.createRef();
  }

  handleSubmit = e => {
    e.preventDefault();
    const data = this.state;
    console.log(data);
  };

  handleOnChange = event => {
    // console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { fullName } = this.state;
    return (
      <div>
        <h1>Forms and Inputs</h1>
        <p>full name is: {fullName}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              ref={this.inputRef}
              className="input"
              type="text"
              name="fullName"
              placeholder="Your Name"
              onChange={this.handleOnChange}
              value={fullName}
            />
          </p>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      fullName: "Justin"
    });
    this.inputRef.current.focus();
  }
}

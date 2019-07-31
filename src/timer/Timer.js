import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
      </div>
    );
  }

  componentDidMount() {
    //   run every 1 sec
    const { startCount } = this.props;
    this.setState({
      count: startCount
    });

    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1 // can also use this.state.count
      }));
    }, 1000); // 1 sec
  }

  componentWillMount() {
    clearInterval(this.myInterval);
  }
}

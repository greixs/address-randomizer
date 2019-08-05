import React, { Component } from "react";

export default class Address extends Component {
  constructor(props) {
    super(props);

    this.state = { isValid: false, result: null };
    this.inputRef = React.createRef();
    this.resultRef = React.createRef();
  }

  validateInput = event => {
    const value = event.target.value;
    const validateRegex = /(\d+|\w+)* \w+/g;

    if (value.match(validateRegex)) {
      this.setState({ isValid: true });
    } else {
      this.setState({ isValid: false });
    }
  };

  jigAddress = event => {
    event.preventDefault();

    //// convert all to lower case
    const addy = this.inputRef.current.value.toLowerCase();

    //// split by spaces
    const addyArray = addy.split(" ");

    //// get non numbers element
    const wordsOnly = addyArray.filter(element => isNaN(element));

    //// jig the address, see the method
    const jiggedAddy = this.itereateAddress(wordsOnly, addyArray);

    //// remove any duplicate
    const removedDup = [...new Set(jiggedAddy)];
    // console.log(removedDup);

    //// save to state
    this.setState({
      result: removedDup.join("\n")
    });
  };

  itereateAddress(arr, initial) {
    var combinations = function(set, initial) {
      return (function acc(xs, set, initial) {
        var x = xs[0];

        //// check if array is empty
        if (typeof x === "undefined") return set;

        // console.log(xs);
        // console.log(set);
        // console.log(initial);
        for (var i = 0, l = set.length; i < l; ++i) {
          const concatted = set[i].concat(x);

          //// find words that are included in the concatted array and remove its vocal characters
          const removedVocals = initial.map(element =>
            concatted.includes(element) && element.length > 1
              ? element.replace(/[aioueo]/g, "")
              : element
          );

          // console.log(removedVocals);
          set.push(removedVocals.join(" "));
        }

        // console.log(xs);
        // console.log(xs.slice(1));
        //// xs.slice(1): go to next array
        return acc(xs.slice(1), set, initial);
      })(set, [[]], initial).slice(1);
    };

    // console.log(arr);
    // console.log(combinations(arr, initial));
    return combinations(arr, initial);
  }

  // removeVocals(element) {
  //   if (element.length == 1) return element;
  //   else {
  //     return element.replace(/[aioueo]/g, "");
  //   }
  // }

  render() {
    return (
      <div>
        <h1>Address Jigger</h1>
        <p>
          Scramble the address to avoid duplicate but directs to the same
          address.
        </p>
        <form>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Put Your Address"
            onChange={this.validateInput}
            ref={this.inputRef}
            required
          />
          <button
            className="btn"
            onClick={this.jigAddress}
            disabled={!this.state.isValid}
          >
            Jig Address
          </button>
          <pre id="addressResult" ref={this.resultRef}>
            {" "}
            {this.state.result}
          </pre>
        </form>
      </div>
    );
  }
}

import React, { Component } from "react";
import Template from "./Template";
import faker from "faker";
import { cc_gen } from "./CardGenerator";

export default class Generators extends Component {
  constructor(props) {
    super(props);

    this.cardTypes = ["mastercard", "visa", "discover", "amex"];
    this.state = {
      countries: {
        Australia: "en_AU"
      },
      addressdetails: {
        firstName: null,
        lastName: null,
        address1: null,
        address2: null,
        city: null,
        state: null,
        zip: null,
        phone: null,
        email: null,
        country: null
      },
      cardDetails: {
        type: null,
        name: null,
        number: null,
        cvv: null,
        month: null,
        year: null
      }
    };
  }

  createFakeAddress = () => {
    faker.locale = "en_AU";
    this.setState({
      addressdetails: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        address1: faker.address.streetAddress(),
        address2: faker.address.secondaryAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),
        phone: faker.phone.phoneNumber("+61 #### ####"),
        email: faker.internet.email(),
        country: faker.address.country()
      }
    });

    console.log(this.state.addressdetails);
  };

  createFakeCard = () => {
    const cardType = this.cardTypes[
      Math.floor(Math.random() * this.cardTypes.length)
    ];
    const cardName = faker.name.findName();
    const cardNumber = cc_gen(cardType);
    const cardMonth = this.generateRandomMonth(12, 1);

    const now = new Date();
    const cardyear = (now.getFullYear() + 3).toString();

    const cvv = this.generateCVV(cardType);

    this.setState({
      cardDetails: {
        type: cardType,
        name: cardName,
        number: cardNumber,
        cvv: cvv,
        month: cardMonth,
        year: cardyear
      }
    });

    console.log(this.state.cardDetails);
  };

  generateRandomMonth(max, min) {
    // generate random month and turns it into string
    const month = parseInt(Math.random() * (max - min) + min).toString();
    // pads the month so it starts with 0 for single digits
    return month.padStart(2, "0");
  }

  generateCVV(type) {
    if (type === "amex") {
      // amex will generate 4 digits
      return Math.floor(1000 + Math.random() * 9000).toString();
    } else {
      // the rest generates 3 digits
      return Math.floor(100 + Math.random() * 900).toString();
    }
  }

  render() {
    return (
      <div>
        <div>
          <h3>Address Generator</h3>
          <p>
            Generate fake Australian address. Other countries will be added in
            the future
          </p>
          <Template details={this.state.addressdetails} />
          <button onClick={this.createFakeAddress} className="btn">
            Generate Address
          </button>
        </div>
        <div>
          <h3>Card Generator</h3>
          <p>Generate fake card for testing payment form</p>
          <Template details={this.state.cardDetails} />
          <button className="btn" onClick={this.createFakeCard}>
            Generate Card
          </button>
        </div>
      </div>
    );
  }
}

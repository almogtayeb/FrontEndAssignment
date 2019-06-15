import React, { Component } from "react";
import { AccordionItem } from 'react-light-accordion';
import Fields from "./Fields.jsx";

class Farms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      farm: props.farm
    };
  }

  render() {
    return (
        <AccordionItem title={this.state.farm.name}>
          <Fields farmId={this.state.farm.id}></Fields>
        </AccordionItem>
    );
  }
}

export default Farms;

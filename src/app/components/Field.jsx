import React, { Component } from "react";

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: props.field
    };
  }

  render() {
    return (
      <li >
          {this.state.field.name}
      </li>
    );
  }
}

export default Field;

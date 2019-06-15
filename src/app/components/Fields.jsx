import React, { Component } from "react";
import Field from "./Field.jsx";

class Fields extends Component {
  constructor(props) {
    super(props);
    this.state = {
        farmId: props.farmId,
        fields: []
    };
    this.fetchFields = this.fetchFields.bind(this);
  }

  fetchFields() {
    fetch("https://qa.manna-irrigation.com:8443/omer/api/v2/fields?farm_id=" + this.state.farmId, {
        method: 'GET',
        headers: new Headers( {
            'X-User-Api-Token': localStorage.getItem('token')
        })
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          fields: json
        });
      });
  }

  componentDidMount() {
    this.fetchFields();
  }

  render() {
    return (
      <ul className="fields">
        {this.state.fields.map((field, index) => (
            <Field key={index} field={field}/>
        ))}
      </ul>
    );
  }
}

export default Fields;

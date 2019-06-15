import React, { Component } from "react";
import { Accordion } from 'react-light-accordion';
import Farm from "./Farm.jsx";

class Farms extends Component {
  constructor(props) {
    super(props);
    this.state = {
        token: props.token,
      farms: []
    };
    this.fetchFarms = this.fetchFarms.bind(this);
  }

  fetchFarms() {
    fetch("https://qa.manna-irrigation.com:8443/omer/api/v2/farms", {
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
          farms: json
        });
      });
  }

  componentDidMount() {
    this.fetchFarms();
  }

  render() {
    return (
      <div className="farms">
          <Accordion atomic={true}>
            {this.state.farms.map((farm, index) => (
                <Farm key={index} farm={farm}/>
            ))}
          </Accordion>
      </div>
    );
  }
}

export default Farms;

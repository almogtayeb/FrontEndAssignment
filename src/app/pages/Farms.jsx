import React from "react";
import { Redirect } from 'react-router-dom';

import Menu from "../components/Menu.jsx";
import Farms from "../components/Farms.jsx";

class FarmsView extends React.Component {
  render() {
      let token = localStorage.getItem('token');
      if (token == null || token == undefined) {
        return (
        <Redirect to='/'></Redirect>
        );      
    }
    return (
      <div className="page">
        <Menu />
        <div className="home">
            <Farms></Farms>
        </div>
      </div>
    );
  }
}

export default FarmsView;

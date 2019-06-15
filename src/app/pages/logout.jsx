import React from "react";
import { Redirect } from 'react-router-dom';

class Logout extends React.Component {
  render() {
    localStorage.removeItem('token');
    return (
      <Redirect to='/'></Redirect>
    );
  }
}

export default Logout;

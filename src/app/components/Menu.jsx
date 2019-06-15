import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    let token = localStorage.getItem('token');

    this.state = {
      loggedIn: token == null || token == undefined ? false : true
    };
  }

  render() {
    let loginStatusLink

    if (this.state.loggedIn) {
      loginStatusLink = <a href="/logout">Logout</a>
    }
    else {
      loginStatusLink = <a href="/login">Login</a>
    }

    return (
      <div className="navigation">
        <div className="menu">
          <ul>
            <li>
              {loginStatusLink}
            </li>
            <li>
              <a href="/farms">Farms</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default User;

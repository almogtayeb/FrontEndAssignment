import React from "react";

import Menu from "../components/Menu.jsx";
import LoginForm from "../components/LoginForm.jsx";

class Login extends React.Component {
  render() {
    return (
      <div className="page">
        <Menu />
        <div className="home" style={{padding: '15px 50px'}}>
            <LoginForm></LoginForm>
        </div>
      </div>
    );
  }
}

export default Login;

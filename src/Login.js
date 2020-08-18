import React from "react";
import "./login.css";
import logo from "./spotify-logo.png";
import { loginUrl } from "./stoptify";

function Login() {
  return (
    <div className="login">
      <img src={logo} alt="" srcset="" />
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;

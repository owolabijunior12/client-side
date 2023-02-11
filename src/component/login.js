
import React from "react";
// import IBOY from "./IBOY.jpg"
import "../style/Login.css";
import { accessUrl } from "./sportify.js";

function Login() {
  return (
    <div className="login">
      <img
        src=''
        alt=""
      /> 
       <a href={accessUrl}>LOGIN </a>
    </div>
  );
}

export default Login;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithPopup } = useAuth0();

  return <button className="btn btn-outline-light" onClick={() => loginWithPopup()}>Admin Login</button>;
};

export default LoginButton;
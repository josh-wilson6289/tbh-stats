import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return <button className="btn btn-outline-light" id="logout-btn" onClick={() => logout()}>Admin Logout</button>;
};

export default LogoutButton;
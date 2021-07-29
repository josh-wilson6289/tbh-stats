import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
<Auth0Provider
  domain="dev-aib9nw9r.us.auth0.com"
  clientId="I5poBYErrJ1q0rj0TbkAjj16i21P5A4N"
  redirectUri={window.location.origin}
  >
<App />
</Auth0Provider>,
 document.querySelector("#root"));
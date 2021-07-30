import React from "react";
import Button from "./Button";
import { useAuth0 } from "@auth0/auth0-react";
import "../style.css";

const Footer = (page) => {
  
const { isAuthenticated, loginWithPopup, logout } = useAuth0();

  return (
<div className="footer container-fluid">
 <div className="row justify-content-center">
    <div className="col-12">
        <a href="/" className="logo-footer">
          <img className="responsive" src="http://texasballhockey.com/wp-content/themes/tbh-new-flex/img/logo.png" alt="Texas Ball Hockey"></img>
        </a>
    </div>
    <div className="row justify-content-center">
        <div className="location">
                <p className="location">
                  3918 Gattis School Rd #102
                  Round Rock, TX 78664
                </p>
        </div>
        </div>
        <div className="row justify-content-center">
          <div className="footer-social">
              <ul>
                <li>
                  <a href="https://www.facebook.com/texasballhockey/"><i className="fab fa-facebook"></i></a>
                </li>
                <li>
                  <a href="https://twitter.com/texasballhockey"><i className="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/texasballhockey"><i className="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCQEtMyZzpMMtQZSZFxmf04A"><i className="fab fa-youtube"></i></a>
                </li>
              </ul>
          </div>
  </div>

  <div className="row justify-content-center">
    <div className="col-5">
      {
        isAuthenticated ? 
        <Button cName="btn btn-outline-light" onClick={logout} name="Admin Logout"/> 
        : 
        <Button cName="btn btn-outline-light" onClick={loginWithPopup} name="Admin Login"/>
      }
    </div>
  </div>
  </div>
</div>
  );
};

export default Footer;
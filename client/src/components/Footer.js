import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "../style.css";

const Footer = () => {
  
  return (
<div className="footer container-fluid">
 <div className="row justify-content-center">
      <div className="col-md-12">
        <a href="/" className="logo-footer">
          <img className="responsive" src="http://texasballhockey.com/wp-content/themes/tbh-new-flex/img/logo.png" alt="Texas Ball Hockey"></img>
        </a>
        <div className="location">
                <p className="location">
                  3918 Gattis School Rd #102
                  Round Rock, TX 78664
                </p>
        </div>
          
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
          <div className="row justify-content-end">
          <div className="col-1">
            <Link 
              to="/login">
            <Button name="Admin Login" type="btn btn-outline-light" />
            </Link>
        </div>
        </div>
      </div>
  </div>
</div>

            
   




  );
};

export default Footer;
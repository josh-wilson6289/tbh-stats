import React, { useContext, useEffect } from "react";
import { AuthContext } from "../utils/context";
import AdminLogin from "../components/AdminLogin";
import "../style.css";

const AddGame = ({page, setPage}) => {

  useEffect(() => {
    setPage("addgame")
  }, [page]);

  const {isAuthenticated, loginWithPopup} = useContext(AuthContext);

  return (
    <div id="addGame">
    <div className="container">
    <div id="addgame-content">
    {isAuthenticated ? 
      <h1>Add a Game</h1>
     : 
      <AdminLogin loginWithPopup={loginWithPopup}/>
  }
  </div>
  </div>
  </div>
  );
};

export default AddGame;
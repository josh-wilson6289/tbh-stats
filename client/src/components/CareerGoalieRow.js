import React, { useState } from "react";
import API from "../utils/API";
import "../style.css";
import PlayerModal from "./PlayerModal";
import Modal from "react-bootstrap/Modal";

const CareerGoalieRow = ({ _id, rank, firstName, lastName, gamesPlayed, team, wins, losses, sol, winPerc, ga, gaa, so }) => {
  
  const [modalShow, setModalShow] = useState(false);
  const [playerRes, setPlayerRes] = useState();
  
  function getPlayerInfo (_id) {
    API.getPlayer(_id)
      .then(result => {
        const player = result.data;
        setPlayerRes(player);
      }) 
  }
  return (
    <React.Fragment>
    <tr onClick={() => [setModalShow(true), getPlayerInfo(_id)]}>
      <th scope="row">{rank}</th>
      <td>{`${firstName} ${lastName}`}</td>
      <td>{gamesPlayed}</td>
      <td>{`${wins}-${losses}-${sol}`}</td>
      <td>{winPerc}</td>
      <td>{ga}</td>
      <td>{gaa}</td>
      <td>{so}</td>
    </tr>
    {playerRes &&
    <PlayerModal 
      show={modalShow}
      onHide={() => setModalShow(false)}
      player={playerRes}
    />
   }
 
   </React.Fragment>
  );
};

export default CareerGoalieRow;
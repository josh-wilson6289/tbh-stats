import React, { useState } from "react";
import API from "../utils/API";
import PlayerModal from "./PlayerModal";
import Modal from "react-bootstrap/Modal";


const PlayerRow = ({ _id, rank, firstName, lastName, gamesPlayed, team, goals, assists, points, pim, ppg }) => {
  const [modalShow, setModalShow] = useState(false);
  const [playerRes, setPlayerRes] = useState();
  
  function getPlayerInfo (_id) {
    API.getPlayer(_id)
      .then(result => {
        const player = result.data;
        console.log(player);
        setPlayerRes(player);
      }) 
  }
  return (
    <React.Fragment>
    <tr onClick={() => [setModalShow(true), getPlayerInfo(_id)]}>
      <th scope="row">{rank}</th>
      <td>{`${firstName} ${lastName}`}</td>
      <td>{team}</td>
      <td>{gamesPlayed}</td>
      <td>{goals}</td>
      <td>{assists}</td>
      <td>{points}</td>
      <td>{pim}</td>
      <td>{ppg}</td>
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

export default PlayerRow;


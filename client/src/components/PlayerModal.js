import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../style.css";
import PersonPlaceholder from "../Images/PersonPlaceholder.png";
import ModalTable from "./ModalTable";
import TBH from "../Images/tbh.jpg";

const PlayerModal = (props) => {   

  
  return (

    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <div className="modal-background" style={{ backgroundImage: `url(${TBH})` }}>
      <Modal.Header closeButton>
      <h1 className="centered-text">{`${props.player.firstName} ${props.player.lastName}`}</h1>
      </Modal.Header>
      <div className="player-card-modal">
      <Modal.Body>      
       <div className="container-fluid">
         <div className="row">
           <div className="col-md-4">
             <img className="modal-pic" src={PersonPlaceholder} alt="placeholder"></img>
           </div>
          <div className="col-md-8 ml-auto">
            <h2 className="centered-text">Career</h2>
            <ModalTable player={props.player} />
          </div>
         </div>
       </div>

      </Modal.Body>
      </div>
      <Modal.Footer>
        <div className="modal-btn">
        <Button onClick={props.onHide}>Close</Button>
        </div>
      </Modal.Footer>
    </div>
    </Modal>

  );
}

export default PlayerModal;
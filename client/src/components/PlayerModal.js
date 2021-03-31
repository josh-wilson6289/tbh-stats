import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../style.css";
import PersonPlaceholder from "../Images/PersonPlaceholder.png";

const PlayerModal = (props) => {   
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
   
      <Modal.Header className="float-right" closeButton>
      <h1 className="modal-title">{`${props.player.firstName} ${props.player.lastName}`}</h1>
      </Modal.Header>
      <div className="player-card-modal">
      <Modal.Body>      
       <div className="container-fluid">
         <div className="row">
           <div className="col-md-4">
             <img src={PersonPlaceholder} alt="placeholder"></img>
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
    
    </Modal>
  );
}

export default PlayerModal;
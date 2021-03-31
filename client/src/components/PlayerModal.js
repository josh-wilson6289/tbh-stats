import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../style.css";
import PersonPlaceholder from "../Images/PersonPlaceholder.png";
import ModalTable from "./ModalTable";
import TBH from "../Images/TBHCard.png";
import TBHVideo from "../Images/TBHVideo.mp4";

const PlayerModal = (props) => {   

  
  return (

    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <video className="background-video" autoPlay loop muted>
      <source src={TBHVideo} type="video/mp4" />
      <div className="overlay">
      <Modal.Header closeButton>
      <h1 className="centered-text">{`${props.player.firstName} ${props.player.lastName}`}</h1>
      </Modal.Header>
      <div className="player-card-modal">
      <Modal.Body>      
       <div className="container-fluid">
         <div className="row">
           <div className="image-container">
           <div className="col-md-4" className="centered-text">
             <img className="modal-pic" src={PersonPlaceholder} alt="placeholder"></img>
           </div>
           </div>
           </div>
           <div className="row">
          <div className="col-sm-12 modal-stats">
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
    </video>
    </Modal>

  );
}

export default PlayerModal;
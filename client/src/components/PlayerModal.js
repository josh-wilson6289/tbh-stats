import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../style.css";
import PersonPlaceholder from "../Images/PersonPlaceholder.png";
import ModalTable from "./ModalTable";
import TBHVideo from "../Images/TBHVideo.mp4";
import Background from "../Images/absurdity.png";

const PlayerModal = (props) => {   
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
    >

      <Modal.Header closeButton>
      <h1 className="centered-text title" id="player-name">{`${props.player.firstName} ${props.player.lastName}`}</h1>
      </Modal.Header>
      <Modal.Body>  
      <div className="video-wrapper">  
       <div className="modal-stats zindex-2">
         <div className="row">
           <div className="image-container">
           <div className="col-md-4" className="centered-text">
             <img className="modal-pic" src={PersonPlaceholder} alt="placeholder"></img>
           </div>
           </div>
           </div>
           <div className="row">
          <div className="modal-stats zindex-1">
            <ModalTable player={props.player} />
            </div>
          </div>
         </div>
      
      <video className="background-video" autoPlay loop muted playsinline>
      <source src={TBHVideo} type="video/mp4" /> 
      Your browser does not support HTML5 video. 
       </video>
      </div>
      </Modal.Body>

      <Modal.Footer>
        <div className="modal-btn">
        <Button onClick={props.onHide}>Close</Button>
        </div>
      </Modal.Footer>

    </Modal>

  );
}

export default PlayerModal;
import React, { useState,useContext } from "react";
import "./PlaceItem.css";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import Modal from "../../shared/components/UIElements/Modal";
import { AuthContext } from "../../shared/context/auth-context";

const PlaceItem = (props) => {
  const auth=useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setConfirmModal]=useState(false);

  const OpenConfirmDeleteModal=()=>setConfirmModal(true);
  const CancelDeleteHandler=()=>setConfirmModal(false);
  const ConfirmDeleteHandler=()=>setConfirmModal(false);

  const OpenMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}> CLOSE</Button>}
      >
        <div className="map-container">
          <h2>My Map</h2>
        </div>
      </Modal>

      <Modal 
      show={showConfirmModal}
      onCancel={CancelDeleteHandler}
      header="Are you sure" 
      footerClass="place-item__modal_actions" 
      footer={
          <React.Fragment>
              <Button inverse onClick={CancelDeleteHandler}> CANCEL</Button>
              <Button danger onClick={ConfirmDeleteHandler}>CONFIRM</Button>
          </React.Fragment>
      }>
        <p>Do you want to proceed and delete this place? </p>
      </Modal>

      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>

          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>

          <div className="place-item__actions">
            <Button inverse onClick={OpenMapHandler}>
              VIEW ON MAP
            </Button>
            {auth.isLoggedIn&&
            <Button to={`/places/${props.id}`}>EDIT</Button>}
            {auth.isLoggedIn &&
            <Button danger onClick={OpenConfirmDeleteModal}>DELETE</Button>}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;

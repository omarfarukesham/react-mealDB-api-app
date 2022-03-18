import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ReactModal = (props) => {
    console.log(props.product);
  const { strMeal, strMealThumb, strCategory, strInstructions } = props?.product || {};
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <img className="w-75" src={strMealThumb} alt="" />
          <br></br>
          <h4 className="p-3">{strMeal}</h4>
        </Modal.Header>
        <Modal.Body>{strCategory}</Modal.Body>
        <p className="p-3">{strInstructions.slice(0,150)}</p>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReactModal;

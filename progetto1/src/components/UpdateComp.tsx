import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { libro } from "../interfaces/libro";
import { FormComp } from "./FormComp";
import { FormCompModal } from "./FormCompModal";


interface Props {
    libro: libro
}

export const UpdateComp = (props: Props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Button variant="primary" style={{width: "60px", height:"60px"}} className="rounded-circle shadow m-2" onClick={handleShow}>
                <FontAwesomeIcon icon={faPencil} className="fs-4 align-top"/>
            </Button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton className="fs-3">
                    <Modal.Title className="fs-1">Modifica libro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <FormCompModal libro={props.libro} show={show} setShow={setShow}></FormCompModal>
                </Modal.Body>
            </Modal>
        </>






    )
}
import React, { useState } from "react";
import axios from "axios";
import { Col, Form, FormGroup, FormLabel, Row } from "react-bootstrap";
import { libro } from "../interfaces/libro";

interface Props {
    libro: libro,
    setShow: any,
    show: any
}

export const FormCompModal = (props: Props) => {

    let libro = props.libro
    let show = props.show
    let setShow = props.setShow

    const modificaContatto = (evt: any) => {

        evt.preventDefault();

        let varlibro: any = {
            titolo: evt.target.inputTitle.value,
            autore: evt.target.inputAut.value,
            descrizione: evt.target.inputDesc.value
        }
        axios.put(`http://localhost:4000/libreria/modifica/${libro?.id_libri}`, varlibro).then((risultato) => {
            console.log(risultato)
        });
        setShow(false)
    }


    return (

        <>
            <Row className="">

                <Col>
                    <Form onSubmit={modificaContatto}>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group className="input-group-lg">
                                        <FormLabel htmlFor="inputTitle" className="fw-bold text-muted">Titolo</FormLabel>
                                        <Form.Control type="text" id="inputTitle" placeholder={libro?.titolo}></Form.Control>
                                    </Form.Group>

                                </Col>
                                <Col>
                                    <Form.Group className="input-group-lg">
                                        <FormLabel htmlFor="inputAut" className="fw-bold text-muted">Autore</FormLabel>
                                        <Form.Control type="text" id="inputAut" placeholder={libro?.autore}></Form.Control>
                                    </Form.Group>

                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mt-3 input-group-lg">
                            <FormLabel htmlFor="inputDesc" className="fw-bold text-muted">Descrizione</FormLabel>
                            <Form.Control as="textarea" rows={3} id="inputDesc" placeholder={libro?.descrizione}  ></Form.Control>
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-lg btn-success mt-4">Modifica</button>

                        </div>

                    </Form>
                </Col>

            </Row>


        </>

    )

}
import axios from "axios";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../actions/login";

export const LoginComponent = () => {
    const dispatch = useDispatch();

    const funzioneInserimento = (evt: any) => {
        evt.preventDefault();

        let varUsername = evt.target.inputUsername.value;
        let varPassword = evt.target.inputPassword.value;

        //VALIDAZIONE

        let credenziali = {
            username: varUsername,
            password: varPassword
        }

        axios.post("http://localhost:4000/login", credenziali).then((risultato) => {
            if (risultato.data.status && risultato.data.status == "success") {
                dispatch(login());
            }
        });
    }

    return (
        <Row>
            <Col md={3}></Col>
            <Col md={6} className="pb-5">
                <h1 className="text-center text-light display-1 my-5">Login</h1>

                <form onSubmit={funzioneInserimento} className="bg-light p-5 rounded mb-5 mx-2 shadow">

                    <Form.Group className="input-group-lg">
                        <Form.Label className="fs-3">Email</Form.Label>
                        <Form.Control type="text" id="inputUsername" placeholder="Inserisci username" required />
                    </Form.Group>
                    <Form.Group className="input-group-lg mt-3">
                        <Form.Label className="fs-3">Password</Form.Label>
                        <Form.Control type="password" id="inputPassword" placeholder="Inserisci password" required />
                    </Form.Group>


                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-lg btn-success mt-3">Login</button>
                    </div>

                </form>
            </Col>
            <Col md={3}></Col>
        </Row>
    )
}
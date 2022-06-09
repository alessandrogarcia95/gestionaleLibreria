import axios from "axios";
import { Col, Form, FormLabel, Row } from "react-bootstrap";
import { libro } from "../interfaces/libro";

export const FormComp = (props: any) => {

    

    const funzioneInserimento = (evt: any) => {
        evt.preventDefault()

        let varLibri: any = {
            titolo: evt.target.inputTitle.value.trim(),
            autore: evt.target.inputAut.value.trim(),
            descrizione: evt.target.inputDesc.value
        }

        if ((varLibri.titolo === "" && varLibri.autore === "") || (varLibri.titolo === "" )|| (varLibri.autore === "")) {

            /*  <div className="alert alert-danger" role="alert">
                 A simple danger alert—check it out!
             </div> */

        } else {


            axios.post<libro>("http://localhost:4000/libreria/inserimento", varLibri)

            evt.target.inputTitle.value = ""
            evt.target.inputAut.value = ""
            evt.target.inputDesc.value = ""

        }


    }


    return (

        <>

            <Row className="">

                <Col md={3}></Col>
                <Col md={6} className="pb-5">
                    <h1 className="text-center text-light display-1 my-5">Inserisci un libro</h1>
                    <Form onSubmit={funzioneInserimento} className="bg-light p-5 rounded mb-5 mx-2 shadow">
                        <Form.Group>
                            <Row>
                                <Col md={12} lg={6}>
                                    <Form.Group className="input-group-lg">
                                        <FormLabel htmlFor="inputTitle" className="fs-3">Titolo</FormLabel>
                                        <Form.Control required type="text" id="inputTitle" placeholder="Inserisci titolo" /* onChange={funzioneControlloTitolo} */ ></Form.Control>
                                    </Form.Group>

                                </Col>
                                <Col md={12} lg={6}>
                                    <Form.Group className="input-group-lg">
                                        <FormLabel htmlFor="inputAut" className="fs-3">Autore</FormLabel>
                                        <Form.Control required type="text" id="inputAut" placeholder="Nome e Cognome"  /* onChange={funzioneControlloAutore} */></Form.Control>
                                    </Form.Group>

                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="mt-3 input-group-lg">
                            <FormLabel htmlFor="inputDesc" className="fs-3">Descrizione</FormLabel>
                            <Form.Control required id="inputDesc" as="textarea" rows={2} placeholder="Descrivi il libro" /* onChange={funzioneControlloDesc} */ ></Form.Control>
                        </Form.Group>

                        <div id="idAlert">

                        </div>

                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-lg btn-success mt-4" /* disabled={!formIsValid} */ >Inserisci</button>
                        </div>

                    </Form>
                </Col>
                <Col md={3}></Col>

            </Row>


        </>

    )

}
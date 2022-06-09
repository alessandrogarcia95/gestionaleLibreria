import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import { RowComp } from "./RowComp";

export const ListComp = () => {

    const [elenco, setElenco] = useState<any[]>([]);

    //     const listaF = elenco.filter(book => (book.titolo.toLowerCase().includes(titolo.toLowerCase())))
    //     setListaFiltrata(listaF);
    // }
    useEffect(() => {
        axios.get("http://localhost:4000/libreria/lista").then((risultato) => {
            setElenco(risultato.data)
        });
    }, [elenco]);

    const filteringTable = (evt?: any) => {
        evt.preventDefault();
 
        let libro: any = {
            titolo: evt.target.inputFiltro.value
        }
        console.log(libro.titolo)
        axios.get(`http://localhost:4000/filtro/lista/${libro.titolo}`).then((risultato) => {
            console.log(risultato.data.result)
            setElenco(risultato.data.result)
        })
    }

    


    return (

        <>
            <Container>
                <Row>
                    <Col className="pb-5">

                        <div className="text-center position-absolute translate-middle start-50" style={{ marginTop: "-34px" }}>
                            <form onSubmit={filteringTable}>
                                <input id='inputFiltro' type="text" placeholder="Cerca.." className="fs-5 shadow rounded-pill px-4 py-2 border-0" />

                                <button type='submit'style={{ width: "50px", height: "50px" }} className="btn btn-bg-green shadow rounded-circle m-2" /* onClick={() => eliminaCampo(props.libro.id_libri)} */>
                                    <FontAwesomeIcon icon={faSearch} className="text-light align-center" />
                                </button>
                            </form>
                        </div>


                        <h1 className="display-1 text-center my-5 text-light">Lista dei libri</h1>
                        <div className="shadow my-5">
                            <Table className=" table table-light">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-4">Titolo</th>
                                        <th scope="col">Autore</th>
                                        <th scope="col">Descrizione</th>
                                        <th className="text-center">Modifica</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {elenco?.map(
                                        (elemento, indice) => <RowComp libro={elemento} key={indice} ></RowComp>

                                    )}
                                </tbody>
                            </Table>
                        </div>

                    </Col>
                </Row>
            </Container>

        </>

    )

}
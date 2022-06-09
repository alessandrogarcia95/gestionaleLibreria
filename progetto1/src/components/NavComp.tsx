import React, { Children } from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '.././App.css'


export const NavComp = () => {

    return (

        <>

            <div className="bg-green"></div>


            <Nav defaultActiveKey="/home" as="ul" className="bg-special-dark px-4 fs-2 py-2 justify-content-around ">
                <Nav.Item as="li">
                    <Link to="/home" className="nav-link text-light link-hover">Libri</Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link to="/inserimento" style={{width: "100px", height:"100px",position:"absolute"}} className="nav-link btn btn-bg-green rounded-circle text-light shadow" >
                        <FontAwesomeIcon icon={faPlus} className="fs-1 position-absolute top-50 start-50 translate-middle" />
                    </Link>
                </Nav.Item>

            </Nav>


        </>

    )




}
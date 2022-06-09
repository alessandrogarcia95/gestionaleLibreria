import axios from "axios";
import React, { useState } from "react";
import { libro } from "../interfaces/libro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons'
import { UpdateComp } from "./UpdateComp";
import { FormComp } from "./FormComp";


interface Props {
    libro: libro
}

export const RowComp = (props: Props) => {


    const eliminaCampo = (id: any) => {
        console.log("elimina")

        axios.delete(`http://localhost:4000/libreria/eliminazione/${id}`).then((risultato) => {
            
        })
    }

    return (
        <>
            <tr key={props.libro.id_libri} className="fs-5 text-muted align-middle">
                <td className="px-4">{props.libro.titolo}</td>
                <td>{props.libro.autore}</td>
                <td>{props.libro.descrizione}</td>
                <td className="text-center" style={{width:"200px"}}>

                    <UpdateComp libro={props.libro}></UpdateComp>


                    <button style={{width: "60px", height:"60px"}} className="btn btn-danger shadow rounded-circle m-2" onClick={() => eliminaCampo(props.libro.id_libri)}>
                        <FontAwesomeIcon icon={faTrash} className="fs-4 align-top" />
                    </button>




                </td>
            </tr>


        </>
        
        )


}
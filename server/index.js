const express = require("express")
const mysql = require("mysql")
const bodyparser = require("body-parser")
const cors = require("cors")
const session = require("express-session")

const app = express()
app.use(bodyparser.json())

app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors())

const port = 4000
const host = 'localhost'

app.listen(port, host, () => {
    console.log(`Connessione effettuata alla porta: ${port}, host: ${host}`)
})

const database = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "root",
    database: "libreria"
})


//Get Lista
app.get('/libreria/lista', (req, res) => {
    database.query('SELECT * FROM libri', (errore, risultato) => {
        if (!errore)
            res.json(risultato)
        else
            res.json({
                status: "errore",
                data: errore.sqlMessage
            })

    })
})


//Inserimento
app.post("/libreria/inserimento", (req, res) => {


    database.query(`INSERT INTO libri (titolo, autore, descrizione) 
        VALUES ('${req.body.titolo}', '${req.body.autore}', '${req.body.descrizione}')`, (errore, risultato) => {
        if (!errore)
            res.json(risultato);
        else {
            res.statusCode = 403;
            res.json({
                status: "error",
                data: errore.sqlMessage
            })
        }
    })

})


//Eliminazione
app.delete("/libreria/eliminazione/:id", (req, res) => {
    database.query(`DELETE FROM libri WHERE id_libri = "${req.params.id}"`, (errore, risultato) => {
        if (!errore)
            if (risultato.affectedRows > 0)
                res.json({
                    status: "success",
                    data: ""
                })
            else
                res.json({
                    status: "error",
                    data: "no_data_found"
                })
        else {
            res.json({
                status: "error",
                data: errore.sqlMessage
            })
        }
    })
})




app.put('/libreria/modifica/:id', (req, res) => {

    database.query(`UPDATE libri SET titolo= '${req.body.titolo}', autore= '${req.body.autore}', descrizione = '${req.body.descrizione}' WHERE id_libri = ${req.params.id}`, (errore, risultato) => {
        if (!errore)
            if (risultato.affectedRows > 0)
                res.json({
                    status: "success",
                    data: ""
                })
            else
                res.json({
                    status: "error",
                    data: "no_data_found"
                })
        else {
            res.json({
                status: "error",
                data: errore.sqlMessage
            })
        }
    })

})


app.post("/login", (req, res) => {
    database.query(`SELECT * FROM libreria.utenti WHERE username = "${req.body.username.trim()}" AND password ="${req.body.password.trim()}"`, (errore, risultato) => {
        if (!errore&& risultato[0] != null) {
            // if (risultato.lenght > 0)
            res.json({
                status: "success",
                data: risultato[0]
            })
        }
        // else
        //     res.json({
        //         status: "error",
        //         data: "no_data_found"
        //     })
        else {
            res.json({
                status: "error",
                data: errore.sqlMessage
            })
         }
    })
})

app.get("/filtro/lista/:titolo", (req, res) => {
    console.log(req.params.titolo)
    database.query(`SELECT * FROM libreria.libri where titolo like '%${req.params.titolo}%'`, (error, result) => {
        console.log(result)
        if (!error)
                res.json({result})
        else {
            res.json({
                status: "error",
                data: error.sqlMessage
            })
        }
    })
})
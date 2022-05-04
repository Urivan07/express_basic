// usando un objeto de express
const express = require('express')
//app de express
const app = express()
// puerto en que vamos a ver nuestra app localhost:3000
const port = 3000 

// path inicial respondera a la url localhost:3000
app.get('/', (req, res) => {
    res.send("Hello word!")
})

// respondiendo texto
// localhost:300/launchx
app.get('/launchx', (req, res) => {
    res.send("Bienvenidos a launchX!")
})

// respondiendo un objeto
// localhost:300/node
app.get('/node', (req, res) => {
    const explorer1 = {id:1, name:"Explorer 1"}
    const explorer2 = {id:2, name:"Explorer 2"}
    const explorer3 = {id:3, name:"Explorer 3"}
    res.send([explorer1, explorer2, explorer3])
})

// Query params: recibir parametros para la url
// localhost:300/explorers/urivan
// req params = {"explorer": "urivan"}
app.get('/explorers/:explorer', (req, res) => {
    console.log(req.params)
    res.send(req.params)
})

// con esto inicializamos el app
app.listen(port, () => {
    console.log("Server Listo!")
})
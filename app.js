const express = require('express')

const app = express();
const port = 3000;

const lista = [
    { id: 1, name: 'Heloisa'},
    { id: 2, name: 'Dimi'},
    { id: 2, name: 'Marie'}];

const cors = require('cors');
app.use(cors())

app.use(express.json());
app.get('/', (req, res) =>{
    res.send(lista)
})

app.listen(port, ()=>{
    console.log("Rodando na porta de número: ", port)
})
const express = require('express');
const app = express();
const PORT = 3000;

const piadas = require('./piadas.json')

app.get('/piadas', (req, res) =>{
    try{
            res.json(piadas);

    }catch(e){
        res.status(500).json({e: "Erro ao obter piada"});
    }
});

app.get('/piadas/aleatoria', (req, res) =>{
    try{
        const index = Math.floor(Math.random() * piadas.length);
        const piada = piadas[index];
        res.json(piada);

    }catch(e){
        res.status(500).json({e: "Erro ao obter piada aleatoria"});
    }
});

app.listen(PORT, ()=> {
    console.log(`Servidor a correr em http://localhost:${PORT}`);
});
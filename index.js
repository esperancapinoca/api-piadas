const express = require('express');
const app = express();
const PORT = 3000;

const piadas = [

{intoducao:"", remate: ""},
{introducao:"", remate:""},
{intoducao:"", remate: ""},
{introducao:"", remate:""},

];

app.get('/piada', (req, res)=>{
    try{
        
        const aleatorio = Math.floor(Math.random() * piadas.length);
        const piada = piadas[aleatorio];
        res.status(200).json(piada);

    }catch(e){

        res.status(500).json({e:'Erro interno no servidor'});
    }
});

app.listen(PORT, ()=> {
    console.log(`Servidor a correr em http://localhost:${PORT}`);
});
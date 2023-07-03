const express = require('express');

const app = express();

const servicoBuscaFatoAno = require('./servico');

app.get('/', (req, res) =>  {

    let anoFato = req.query.ano;

    if(servicoBuscaFatoAno.servicoValidaAno(anoFato))
    {
        var fato = servicoBuscaFatoAno.servicoBuscarFatoPorAno(anoFato);
        res.json({fato : fato});
    }
    else
    {
        res.status(400).json({erro:'Parâmetro ano inválido'});
    }
    
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080");
});
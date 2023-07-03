const fatos = require('./fatos');

function servicoValidaAno(anoFato)
{
    if(isNaN(anoFato))
    {
        return false;
    }
    else
    {
        if(anoFato >= 1920 && anoFato <= 2020)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

function servicoBuscarFatoPorAno(anoFato)
{
    
    let fatoSelecionado = fatos.fatosHistoricos.find(fato => {
        return fato.AnoF == anoFato;
    });

    return fatoSelecionado.Fato;
    
}


exports.servicoBuscarFatoPorAno = servicoBuscarFatoPorAno;
exports.servicoValidaAno = servicoValidaAno;
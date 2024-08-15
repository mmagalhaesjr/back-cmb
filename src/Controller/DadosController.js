import DadosServices from "../Services/DadosServices.js";


async function encontrarDados(req, res) {
    const { authorization } = req.headers;


    try {
        const todosDados = await DadosServices.encontrarDados(authorization)
        return res.status(200).send(todosDados[0]);


    } catch (error) {

        console.error(error);

        if (error.message === 'Token inválido') {
            return res.status(401).send(error.message);

        } else if (error.message === 'Não há dados de usuario cadastrado') {
            return res.status(404).send(error.message);

        }
        return res.status(500).send('Erro no servidor controller');
    }
}

async function enviarDados(req, res) {
    const { authorization } = req.headers;
    const dadosUsuario = req.body;


    try {
        await DadosServices.enviarDados(dadosUsuario, authorization)
        return res.status(201).send('Dados enviados');


    } catch (error) {

        console.error(error);

        if (error.message === 'Token inválido') {
            return res.status(401).send(error.message);

        } else if (error.message === 'Não há dados de usuario cadastrado') {
            return res.status(404).send(error.message);

        }
        return res.status(500).send('Erro no servidor controller');
    }
}


export default {
    encontrarDados,
    enviarDados
}
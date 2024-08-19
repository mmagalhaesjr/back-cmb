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

async function deletarDados(req, res) {
    const { id } = req.params;
    const { authorization } = req.headers;
  

    try {
        await DadosServices.deletarDados(id, authorization);
        return res.status(200).send("Dados excluídos com sucesso")
    } catch (error) {
        if (error.message === 'Token inválido') {
            return res.status(401).send(error.message);

        } else if (error.message === 'Dados inexistentes') {
            return res.status(404).send(error.message);

        } else {
            return res.status(500).send('Erro interno do servidor controler(deletar)');
        }
    }
}


export default {
    encontrarDados,
    enviarDados,
    deletarDados
}
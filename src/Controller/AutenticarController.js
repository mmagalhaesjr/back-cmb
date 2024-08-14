import AutenticarServices from "../Services/AutenticarServices.js";

async function login(req, res){

    const usuarioLogin = req.body
   
    try {
        const secao = await AutenticarServices.login(usuarioLogin);
        return res.status(200).send(secao);

    } catch (error) {
        console.error('Erro no servidor:', error);
        return res.status(500).send('Ocorreu um erro interno. Por favor, tente novamente mais tarde controller.');
    }

   
}

export default {
    login
}
import { v4 as uuidv4 } from 'uuid';
import AutenticarRepositories from '../Repositories/AutenticarRepositories.js';

async function login(usuarioLogin) {
    // Executa a verificação do e-mail
    const [rows] = await AutenticarRepositories.verificaEmail(usuarioLogin);

    if (rows.length === 0) {
        throw new Error('Usuário não encontrado');
    }

    if (rows[0].senha !== usuarioLogin.senha) {
        throw new Error('Senha incorreta!');
    }

    // Obtém o ID do usuário
    const idUsuario = rows[0].id;
    const token = uuidv4();

    await AutenticarRepositories.removerTokensAntigos(idUsuario);

    // Insere o token na sessão
    await AutenticarRepositories.inserirTokenSecao(idUsuario, token);


    return { token, idUsuario };
}

export default {
    login
}

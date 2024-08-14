import db from '../DataBase/db.js';

async function verificaEmail(usuarioLogin) {
    return await db.query('SELECT * FROM usuario WHERE email = ?', [usuarioLogin.email]);
}

async function verificaSessao(idUsuario) {
    const [result] = await db.query('SELECT * FROM sessao WHERE id_usuario = ?', [idUsuario]);
    return result.length > 0;
}
async function inserirTokenSecao(idUsuario, token) {
    await db.query('INSERT INTO sessao (id_usuario, token) VALUES (?, ?)', [idUsuario, token]);
}

async function removerTokensAntigos(idUsuario) {
    await db.query('DELETE FROM sessao WHERE id_usuario = ?', [idUsuario]);
}


export default {
    verificaEmail,
    verificaSessao,
    inserirTokenSecao,
    removerTokensAntigos
  
};

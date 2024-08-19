import db from '../DataBase/db.js'


async function verificaToken(token){
    return await db.query(`SELECT * FROM sessao WHERE token = ?`, [token]);
}

async function encontrarDados(){ 
    return await db.query(`SELECT * FROM dados`)
}

async function enviarDados(dadosUsuario) {
    return await db.query(
        `INSERT INTO dados (id_empresa, nome, telefone, email, mensagem) 
        VALUES (?, ?, ?, ?, ?)`,
        [
            dadosUsuario.id_empresa,
            dadosUsuario.nome,
            dadosUsuario.telefone,
            dadosUsuario.email,
            dadosUsuario.mensagem
        ]
    );
}

async function selecionarDados(id, tokenBd) {
    return await db.query(`SELECT * FROM dados WHERE id = ? `, [id]);
}

async function deletarDados(id) {
    await db.query(`DELETE FROM dados WHERE id = ?`, [id]);
}


export default {
    verificaToken,
    encontrarDados,
    enviarDados,
    selecionarDados,
    deletarDados
    
}
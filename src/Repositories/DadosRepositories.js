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


export default {
    verificaToken,
    encontrarDados,
    enviarDados
    
}
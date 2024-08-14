import db from '../DataBase/db.js'


async function verificaToken(token) {
    return await db.query(`SELECT * FROM sessao WHERE token = ?`, [token]);
}

async function encontrarDados(){ 
    return await db.query(`SELECT * FROM dados`)
}


export default {
    verificaToken,
    encontrarDados
    
}
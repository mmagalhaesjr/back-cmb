import mysql from 'mysql2/promise';
import dotenv from "dotenv";
dotenv.config();

// Função para analisar a URL do banco de dados
function parseDatabaseUrl(url) {
    const urlObject = new URL(url);
    return {
        host: urlObject.hostname,
        user: urlObject.username,
        password: urlObject.password,
        database: urlObject.pathname.slice(1), // Remove o leading '/'
        port: urlObject.port || 3306 // Define a porta padrão se não estiver especificada
    };
}

const dbConfig = parseDatabaseUrl(process.env.DATABASE_URL);

const db = mysql.createPool({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
    port: dbConfig.port,
    ssl: process.env.MODE === "prod" ? { rejectUnauthorized: false } : undefined
});

export default db;

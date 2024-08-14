import express from "express";
import cors from "cors";

import autenticarRotas from "./Routes/AutenticarRotas.js";



import dotenv from "dotenv";
dotenv.config()


const server = express().use(cors());
server.use(express.json())


server.use(autenticarRotas)



const PORTA = process.env.PORTA 

server.listen(PORTA, () => {
    console.log(`*** Servidor rodando na porta ${PORTA} ***`);
});
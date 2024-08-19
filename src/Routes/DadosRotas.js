import { Router } from "express";
import { validarToken } from '../Middleware/ValidarToken.js';
import { validarDados } from '../Middleware/ValidarDados.js';
import DadosController from '../Controller/DadosController.js'
import { dadosSchema } from "../Schema/AutenticarSchema.js";


const dadosRotas = Router()

dadosRotas.get("/todosDados",validarToken, DadosController.encontrarDados)

dadosRotas.post("/enviarDados",validarToken,validarDados(dadosSchema),DadosController.enviarDados)

dadosRotas.delete("/deletarDados/:id",validarToken,DadosController.deletarDados)


export default dadosRotas
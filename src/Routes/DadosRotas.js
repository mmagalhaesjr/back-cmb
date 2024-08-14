import { Router } from "express";
import { validarToken } from '../Middleware/ValidarToken.js';
import DadosController from '../Controller/DadosController.js'


const dadosRotas = Router()

dadosRotas.get("/todosDados",validarToken, DadosController.encontrarDados)


export default dadosRotas
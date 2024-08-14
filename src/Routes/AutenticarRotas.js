import { Router } from 'express';

import { validarDados } from '../Middleware/ValidarDados.js';
import { LoginSchema } from '../Schema/AutenticarSchema.js';
import AutenticarController from '../Controller/AutenticarController.js';

const autenticarRotas = Router();

autenticarRotas.post('/login', validarDados(LoginSchema), AutenticarController.login);

export default autenticarRotas;

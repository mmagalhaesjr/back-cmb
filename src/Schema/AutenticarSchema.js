import Joi from "joi";

export const LoginSchema = Joi.object({
    email:Joi.string().email().required(),
    senha:Joi.string().required()
})

export const dadosSchema = Joi.object({
    id_empresa:Joi.number().required(),
    nome:Joi.string().required(),
    telefone:Joi.number().required(),
    email:Joi.string().email().required(),
    mensagem:Joi.string().optional()
})
import Joi from "joi";

export const LoginSchema = Joi.object({
    email:Joi.string().email().required(),
    senha:Joi.string().required()
})
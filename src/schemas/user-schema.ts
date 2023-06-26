import joi from "joi";

export const signUpSchema = joi.object({
    nome: joi.string().min(3).max(100).required(),
    email: joi.string().email().required(),
    senha: joi.string().min(6).max(30).required(),
    telefone: joi.number().min(100000000).max(999999999).required()
});

export const signInSchema = joi.object({
    email: joi.string().email().required(),
    senha: joi.string().min(6).max(30).required(),
    
});
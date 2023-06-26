import { Request, Response } from 'express';
import authServices from '../services/auth-services.js';

async function signUp(req: Request, res: Response) {
    const { nome, email, senha, telefone } = req.body;

    try {
        await authServices.signUp({ nome, email, senha, telefone });
        return res.sendStatus(201);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function signIn(req: Request, res: Response) {
    const { email, senha } = req.body;

    try {
        const token = await authServices.signIn({ email, senha });
        return res.send({ token }).status(201);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export default {
    signUp,
    signIn,
};

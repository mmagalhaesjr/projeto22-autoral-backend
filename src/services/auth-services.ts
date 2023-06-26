import * as bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import userRepositories from '../repositories/user-repositories.js';

interface SignUpData {
    nome: string;
    email: string;
    senha: string;
    telefone: number;
}

interface SignInData {
    email: string;
    senha: string;
}

async function signUp({ nome, email, senha, telefone }: SignUpData) {
const user = await userRepositories.findUserByEmail(email);
if (user) throw new Error('User already exists');

const hashPassword = await bcrypt.hash(senha, 10);

await userRepositories.createUser({ nome, email, senha: hashPassword, telefone });
}

async function signIn({ email, senha }: SignInData) {
const user = await userRepositories.findUserByEmail(email);
if (!user) throw new Error('User does not exist');

const validacaoSenha = await bcrypt.compare(senha, user.senha);
if (!validacaoSenha) throw new Error('Email or password are incorrect');

const token = uuid();


const result = await userRepositories.createSession({ id_usuario: user.id, token });
return result.token


}

const authServices = {
signIn,
signUp,
};

export default authServices;


















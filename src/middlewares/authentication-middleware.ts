import userRepositories from "../repositories/user-repositories.js";


export async function validateToken(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if (!token) return res.status(401).send("No token");

    try {
        const session  = await userRepositories.findSessionByToken(token)
        if (!session) return res.status(401).send("session not found");
        res.locals.userId = session.id_usuario;
       next()
    } catch (error) {
        res.status(500).send('ooi...')
    }
}
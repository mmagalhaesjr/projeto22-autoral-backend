import { Router } from "express";
import { signInSchema, signUpSchema } from "../schemas/user-schema.js";
import { validateSchema } from "../middlewares/validate-middleware.js";
import authController from "../controllers/auth-controller.js"

const authRoutes = Router();

authRoutes.post('/sign-up',validateSchema(signUpSchema), authController.signUp);
authRoutes.post('/sign-in',validateSchema(signInSchema),authController.signIn);

export default authRoutes;
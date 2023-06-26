import { Router } from "express";
import fieldController from '../controllers/field-controller.js'

const fieldRoutes = Router();

fieldRoutes.get('/field',fieldController.getAllFields)


export default fieldRoutes;
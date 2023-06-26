import { Router } from "express";
import scheduleController from "../controllers/schedule-controller.js";
import { validateSchema } from '../middlewares/validate-middleware.js';
import { dateSchema } from "../schemas/date-schema.js";


const scheduleRoutes = Router();

scheduleRoutes.get('/schedule/:id/:date', scheduleController.getSchedule)



export default scheduleRoutes;
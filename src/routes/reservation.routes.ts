import { Router } from "express";
import reservationController from '../controllers/reservation-controller.js'
import { validateToken } from "../middlewares/authentication-middleware.js";
import { idSchema } from "../schemas/id-schema.js";
import { validateSchema } from "../middlewares/validate-middleware.js";

const reservationRoutes = Router();

reservationRoutes.all('/*', validateToken)
reservationRoutes.get('/reservation',reservationController.getReservationsByUserId)
reservationRoutes.post('/reservation',validateSchema(idSchema),reservationController.createReservation)
reservationRoutes.delete('/reservation/:id', reservationController.deleteReservation)
reservationRoutes.patch('/reservation',validateSchema(idSchema))


export default reservationRoutes;
import { NextFunction, Request, Response } from 'express';
import reservationServices from '../services/reservation-services.js'


async function getReservationsByUserId(req: Request, res: Response, next: NextFunction){
  const userId = res.locals.userId

  try {
    const reservations = await reservationServices.getReservationsByUserId(userId);
    res.send(reservations);
  } catch (error) {
    next(error)
  }
}

async function createReservation(req: Request, res: Response, next: NextFunction) {
  const userId = res.locals.userId
  const scheduleId = req.body.id

  try {
    const reservation = await reservationServices.createReservation(userId, scheduleId);
    res.send(reservation).status(201);
  } catch (error) {
    next(error)
  }
}

async function deleteReservation(req: Request, res: Response, next: NextFunction){
  const userId = res.locals.userId
  const reservationId = Number(req.params.id)

  try {
    await reservationServices.deleteReservation(userId, reservationId);
    res.sendStatus(204);
  } catch (error) {
    next(error)
  }
}


const reservationsController = {
    getReservationsByUserId,
    deleteReservation,
    createReservation
}

export default reservationsController;
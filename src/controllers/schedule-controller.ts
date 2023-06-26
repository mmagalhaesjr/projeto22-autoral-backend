import { NextFunction, Request, Response } from "express";
import scheduleService from "../services/schedule-services.js"

async function getSchedule(req: Request, res: Response, next: NextFunction) {
  const fieldId = parseInt(req.params.id);
  const fieldDate = req.params.date

  try {
    const schedule = await scheduleService.getSchedule({fieldId, fieldDate});
    res.send(schedule);
  } catch (error) {
    next(error)
  }

}

const scheduleController = {
  getSchedule
}

export default scheduleController
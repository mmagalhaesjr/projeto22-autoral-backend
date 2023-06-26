import { NextFunction, Request, Response } from 'express';
import fieldServices from '../services/field-services.js'

async function getAllFields(req: Request, res: Response, next: NextFunction){
  try {
    const fields = await fieldServices.getSoccerField();
    res.send(fields);
  } catch (error) {
    next(error)
  }
}

const fieldController = {
  getAllFields
}

export default fieldController;
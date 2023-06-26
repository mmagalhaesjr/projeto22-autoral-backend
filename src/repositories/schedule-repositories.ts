import prisma from "../config/database.js"
import { create } from 'ts-node';
import { Agenda } from '@prisma/client'
import { boolean, number } from "joi";

interface GetScheduleParams {
  fieldDate: string;
  fieldId: number;
}

async function getSchedule({ fieldId, fieldDate }: GetScheduleParams) {
  const startDate = new Date(fieldDate)
  const endDate = new Date(fieldDate)
  endDate.setDate(startDate.getDate() + 1);


  return await prisma.agenda.findMany({
    where: {
      id_quadra: fieldId,
      data: {
        gte: startDate,
        lt: endDate
      }

    },
  })
}

async function getScheduleById(scheduleId: number) {
  return await prisma.agenda.findFirst({
    where: {
      id: scheduleId
    }
  })

}

async function updateSchedule(id:number, disponivel: boolean ){
  return await prisma.agenda.update({
   where:{id:id},
   data:{disponivel:disponivel}
  })
}

const scheduleRepositories = {
  getSchedule,
  getScheduleById,
  updateSchedule,
}
export default scheduleRepositories
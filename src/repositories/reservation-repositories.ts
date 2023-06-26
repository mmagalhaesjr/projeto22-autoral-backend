import prisma from '../config/database.js';
import {Reserva} from "@prisma/client"


async function getReservationsByUserId(userId: number): Promise<Reserva[]> {
    return await prisma.reserva.findMany({
        where:{
            id_usuario: userId
        },
        include:{
          usuario:{
            select:{
              nome:true,
            }
          },
          agenda:true
        }
    });
  }

async function getReservationById(id: number): Promise<Reserva> {
    return await prisma.reserva.findFirst({
        where:{
            id: id
        }
    });
  }

  async function createReservation(userId:number,scheduleId: number ) {
    return await prisma.reserva.create({
      data: {
        id_usuario:userId,
        id_agenda:scheduleId
  
      }
    })
  
  }

  async function deleteReservation(reservationId) {
    return await prisma.reserva.delete({
      where:{
        id:reservationId

      }
      })
    }
  




  const reservationRepositories ={
    getReservationsByUserId,
    createReservation,
    deleteReservation,
    getReservationById
  }
  
  export default reservationRepositories
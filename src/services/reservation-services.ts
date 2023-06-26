import { cannotCompleteReservationError } from '../errors/cannot-complete-reservation-error.js';
import { cannotListReservationsError } from '../errors/cannot-list-reservations-error.js';
import { forBiddenError } from '../errors/forbidden-error.js';
import { notFoundError } from '../errors/not-found-error.js';
import reservationRepositories from '../repositories/reservation-repositories.js';
import scheduleRepositories from '../repositories/schedule-repositories.js';

async function getReservationsByUserId(userId: number) {
    const reservations = await reservationRepositories.getReservationsByUserId(userId);

    if (reservations.length === 0) throw cannotListReservationsError()
    return reservations;
}

async function createReservation(userId: number, scheduleId: number) {
    const schedule = await scheduleRepositories.getScheduleById(scheduleId)
    if (!schedule || !schedule.disponivel) throw cannotCompleteReservationError()

    await scheduleRepositories.updateSchedule(scheduleId, false)
    const reservation = await reservationRepositories.createReservation(userId, scheduleId)
    return reservation
}

async function deleteReservation(userId: number, reservationId: number) {
    const reservation = await reservationRepositories.getReservationById(reservationId)

    if (!reservation) throw notFoundError()
    if (reservation.id_usuario !== userId) throw forBiddenError()

    await reservationRepositories.deleteReservation(reservationId)
    await scheduleRepositories.updateSchedule(reservation.id_agenda, true)
}



const fieldServices = {
    getReservationsByUserId,
    deleteReservation,
    createReservation
}
export default fieldServices;
import { ApplicationError } from "../protocols";


export function cannotListReservationsError(): ApplicationError {
  return {
    name: 'CannotListReservationsError',
    message: 'Cannot list reservations!',
  };
}

import { ApplicationError } from "../protocols";

export function cannotCompleteReservationError(): ApplicationError {
  return {
    name: 'CannotCompleteReservationError',
    message: 'Cannot complete this reservation!',
  };
}


import { notFoundError } from "../errors/not-found-error.js";
import scheduleRepositories from "../repositories/schedule-repositories.js"

interface GetScheduleParams {
    fieldDate: string;
    fieldId: number;
  }


async function getSchedule( {fieldDate, fieldId} : GetScheduleParams) {
    const schedule = await scheduleRepositories.getSchedule({fieldId, fieldDate});
    if (schedule.length === 0) throw notFoundError();
  
    return schedule;
  }


const scheduleService = {
    getSchedule,
}
export default scheduleService
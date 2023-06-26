import { notFoundError } from '../errors/not-found-error.js';
import fieldRepositories from '../repositories/field-repositories.js'

async function getSoccerField() {
  const fields = await fieldRepositories.getFild();
  if(fields.length === 0) throw notFoundError()

  return fields;
}
const fieldServices = {
    getSoccerField
}
export default fieldServices;
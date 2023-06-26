import prisma from '../config/database.js';
import {Quadra} from "@prisma/client"



async function getFild(): Promise<Quadra[]> {
    return await prisma.quadra.findMany();
  }


  const fieldRepositories ={
    getFild
  }
  
  export default fieldRepositories
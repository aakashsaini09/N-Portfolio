import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function insertUser(username: string, password: string, firstname: string, lastname: string){
    const response = await prisma.user.create({

        data:{
            username, 
            password, 
            firstname, 
            lastname, 
        }
    })
    console.log(response)
}
insertUser("akash2", "abcd2", "aakash2", "saini2")
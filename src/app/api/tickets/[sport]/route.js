import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {

    const sport = params.sport.toLowerCase()
    
    const tickets = await prisma.ticket.findMany({
        where: {
            event: {
                sport: {
                    equals: sport,  

                },
            },
        },
    });
            
    return new Response(JSON.stringify(tickets));
            
    }
    
import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {

    const sport = params.sport

    const ticket = await prisma.ticket.findMany({
        where: {
            event: {
                sport: {
                    equals: 'Football',  

                },
            },
        },
    });
            
    return new Response(JSON.stringify(ticket));
            
    }
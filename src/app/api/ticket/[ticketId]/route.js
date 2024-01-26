import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {

    const ticketId = parseInt(params.ticketId)

    const ticket = await prisma.ticket.findUnique({
        where: {
            id: ticketId,
        }
    });
            
    return new Response(JSON.stringify(ticket));
            
    }
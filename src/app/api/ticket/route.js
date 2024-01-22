import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// TODO: fix this route to all tickets for a sport
export async function GET(request, { params }) {
    const sport = params.sport
    const ticket = await prisma.ticket.findMany({
        where: {
            event: {
                sport: {
                    equals: sport,
                },
            },
        },
    });

    return new Response(JSON.stringify(ticket));
}

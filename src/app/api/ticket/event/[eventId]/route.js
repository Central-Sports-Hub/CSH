import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// TODO: fix this route to all tickets for a sport
export async function GET(request, { params }) {
    const { eventId } = params;
    const tickets = await prisma.ticket.findMany({
        where: {
            event_id: parseInt(eventId),
        },
        include: {
          event: {
            include: {
              venue: true,
            }
          }
        }
    });

    return new Response(JSON.stringify(tickets));
}

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// TODO: fix this route to all tickets for a sport
export async function GET() {
  
    const tickets = await prisma.ticket.findMany({
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

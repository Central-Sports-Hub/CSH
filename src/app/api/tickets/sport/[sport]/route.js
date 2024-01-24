import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// TODO: fix this route to all tickets for a sport
export async function GET(request, { params }) {

  const sport = params.sport.toLowerCase();

  const tickets = await prisma.ticket.findMany({
    where: {
      event: {
        sport: {
          equals: sport,
          mode: "insensitive",
        },
      },
    },
    include: {
      event: {
        include: {
          venue: true,
        },
      },
    },
  });

  return new Response(JSON.stringify(tickets));
}

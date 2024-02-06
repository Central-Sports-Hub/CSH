import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// TODO: fix this route to all tickets for a sport
export async function GET(request, { params }) {
  const { eventId } = params;
  const events = await prisma.event.findMany({
    where: {
      id: parseInt(eventId),
    },
  });

  return new Response(JSON.stringify(events));
}

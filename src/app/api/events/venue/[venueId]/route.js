import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// TODO: fix this route to all tickets for a sport
export async function GET(request, { params }) {
    const { venueId } = params;
    const events = await prisma.event.findMany({
        where: {
          venue_id: parseInt(venueId),
        },
    });

    return new Response(JSON.stringify(events));
}

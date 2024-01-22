import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// get a specific venue by id
export async function GET(request, { params }) {

    const venueId = parseInt(params.venueId)

    const venue = await prisma.venues.findUnique({
        where: {
            id: venueId,
        }
    });

    return new Response(JSON.stringify(venue));
}

// TODO: get all venues for a sport
// TODO: get all events for a sport

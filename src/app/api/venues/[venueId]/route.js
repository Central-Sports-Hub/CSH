import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {

    const venueId = parseInt(params.venueId)

    const venue = await prisma.venues.findUnique({
        where: {
            id: venueId,
        }
    });
            
    return new Response(JSON.stringify(venue));
            
    }
    
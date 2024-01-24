import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {

    const venueId = parseInt(params.venueId)

    const comments = await prisma.comments.findMany({
        where: {
            venue_id: venueId
        }
    });
            
    return new Response(JSON.stringify(comments));
            
    }
    
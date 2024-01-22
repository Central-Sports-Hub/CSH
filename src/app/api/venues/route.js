import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const venues = await prisma.venues.findMany();
    return new Response(JSON.stringify(venues));            
}

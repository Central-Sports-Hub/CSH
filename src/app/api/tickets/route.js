import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {

    const tickets = await prisma.ticket.findMany();
            
    return new Response(JSON.stringify(tickets));
            
    }
import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {

        const venues = await prisma.venues.findMany();

        res.send(venues)
    }
    
    }
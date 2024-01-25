import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {

    const userId = parseInt(params.userId)

    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        }
    });
            
    return new Response(JSON.stringify(user));
            
    }
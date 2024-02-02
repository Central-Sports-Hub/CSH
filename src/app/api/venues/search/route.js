import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  const { search } = request.query;

  const venues = await prisma.venues.findMany({
    where: {
      AND: [
        {
          name: {
            contains: search || "",
          },
        },
        {
          location: {
            contains: search || "",
          },
        },
        {
          home_team: {
            contains: search || "",
          },
        },
      ],
    },
  });

  return new Response(JSON.stringify(venues));
}

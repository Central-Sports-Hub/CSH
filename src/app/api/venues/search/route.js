import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, obj) {
  console.log("obj", request.nextUrl.searchParams);
  const search = request.nextUrl.searchParams.get("search");
  console.log("search", search);

  const venues = await prisma.venues.findMany({
    where: {
      OR: [
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

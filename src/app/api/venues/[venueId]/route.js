import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// get a specific venue by id
export async function GET(request, { params }) {
  const venueId = parseInt(params.venueId);

  const venue = await prisma.venues.findUnique({
    where: {
      id: venueId,
    },
  });

  return new Response(JSON.stringify(venue));
}

// TODO: get all venues for a sport

// get a specific venue by id
// export async function GET(request, { params }) {

//     const venueId = parseInt(params.venueId)

//     const venue = await prisma.venues.findUnique({
//         where: {
//             id: venueId,
//         }
//     });

//     const data = await fetch(request.url)
//     const responseData = await data.json()

//     let output = ''

//     for (let i = 0; i < responseData.length; i++) {
//         output += `
//         <div class="w-1/4 p-4">
//             <div class="bg-white rounded-lg shadow p-4">
//                 <h2 class="text-xl font-semibold mb-2">${responseData[i].name}</h2>
//                 <p class="text-gray-600 mb-4">${responseData[i].description}</p>
//             </div>
//         </div>
//         `
//     }

//     const response = `
//     <div class="flex flex-wrap">
//         ${output}
//     </div>
//     `

//     return new Response(response, {
//         headers: { 'Content-Type': 'text/html' },
//     });
// }

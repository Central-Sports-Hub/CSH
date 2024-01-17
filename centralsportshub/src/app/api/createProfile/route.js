import prismadb from "@/app/lib/prismadb";

export async function POST(request) {
  const createUser = async () => {
    console.log("creating user");
  
    await prisma.user.create({
      data: [
        {
          email: {""},
          firstName:{""} ,
          lastName: {""} ,
          clerkId: {""},
          isAdmin: {false},
        },
}

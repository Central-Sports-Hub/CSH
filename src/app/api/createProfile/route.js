import prismadb from "@/lib/prismadb";

export async function POST(request) {
  const createUser = async () => {
    console.log("creating user");

    try {
      const user = await prisma.user.create({
        data: {
          email: "",
          firstName: "",
          lastName: "",
          clerkId: "",
          isAdmin: false,
        },
      });

      console.log("User created:", user);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  await createUser();

  return new Response("User created", { status: 201 });
}

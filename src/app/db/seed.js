const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createUser = async () => {
  console.log("creating user");

  await prisma.user.createMany({
    data: [
      {
        email: "dummy@aol.com",
        firstName: "dummy",
        lastName: "dummy",
        clerkId: "dummy",
        isAdmin: false,
      },
      {
        email: "somaan@aol.com",
        firstName: "somaan",
        lastName: "iqbal",
        clerkId: "somaan",
        isAdmin: true,
      },
      {
        email: "travynn@aol.com",
        firstName: "travynn",
        lastName: "ippolito",
        clerkId: "travynn",
        isAdmin: true,
      },
      {
        email: "steven@aol.com",
        firstName: "steven",
        lastName: "kaste",
        clerkId: "steven",
        isAdmin: true,
      },
    ],
  });
};

const createVenue = async () => {
  console.log("creating venue");

  await prisma.venues.createMany({
    data: [
      {
        name: "ATT Stadium",
        location: "Arlington, Texas",
        home_team: "Dallas Cowboys",
        capacity: 80000,
        img_url: "n/a",
      },
      {
        name: "Dodger Stadium",
        location: "Los Angeles, California",
        home_team: "Los Angeles Dodgers",
        capacity: 56000,
        img_url: "n/a",
      },
    ],
  });
};

const createEvent = async () => {
  console.log("creating event");

  await prisma.event.createMany({
    data: [
      {
        venue_id: 1,
        team1: "Dallas Cowboys",
        team2: "Greenbay Packers",
        start_time: new Date(),
        sport: "football",
      },
      {
        venue_id: 2,
        team1: "Philadelphia Eagles",
        team2: "Tampa Bay Buccaneers",
        start_time: new Date(),
        sport: "football",
      },
      {
        venue_id: 1,
        team1: "Los Angeles Dodgers",
        team2: "New York Yankees",
        start_time: new Date(),
        sport: "baseball",
      },
      {
        venue_id: 2,
        team1: "Inter Miami CF",
        team2: "Los Angeles Football Club",
        start_time: new Date(),
        sport: "soccer",
      },
      {
        venue_id: 1,
        team1: "Los Angeles Lakers",
        team2: "Chicago Bulls",
        start_time: new Date(),
        sport: "basketball",
      },
      {
        venue_id: 2,
        team1: "Los Angeles Kings",
        team2: "Seattle Kraken",
        start_time: new Date(),
        sport: "hockey",
      },
    ],
  });
};

const createTicket = async () => {
  console.log("creating ticket");

  await prisma.ticket.createMany({
    data: [
      {
        event_id: 1,
        owner_id: 1,
        section: 1,
        seat: 1,
        row: 1,
        price: 10.0,
        date: new Date(),
      },
      {
        event_id: 2,
        owner_id: 2,
        section: 2,
        seat: 2,
        row: 2,
        price: 20.0,
        date: new Date(),
      },
      {
        event_id: 3,
        owner_id: 2,
        section: 2,
        seat: 2,
        row: 2,
        price: 20.0,
        date: new Date(),
      },
      {
        event_id: 4,
        owner_id: 2,
        section: 2,
        seat: 2,
        row: 2,
        price: 20.0,
        date: new Date(),
      },
      {
        event_id: 5,
        owner_id: 2,
        section: 2,
        seat: 2,
        row: 2,
        price: 20.0,
        date: new Date(),
      },
      {
        event_id: 6,
        owner_id: 2,
        section: 2,
        seat: 2,
        row: 2,
        price: 20.0,
        date: new Date(),
      },
    ],
  });
};
const createOrder = async () => {
  console.log("creating order");

  await prisma.order.createMany({
    data: [
      { user_id: 1, ticket_id: 2, created_at: new Date() },
      { user_id: 2, ticket_id: 1, created_at: new Date() },
    ],
  });
};

const createComment = async () => {
  console.log("creating comment");

  await prisma.comments.createMany({
    data: [
      {
        venue_id: 1,
        user_id: 1,
        comment_text: "This stadium doo doo",
        created_at: new Date(),
        category: "stadium",
      },
      {
        venue_id: 2,
        user_id: 2,
        comment_text: "This stadium Boo Boo",
        created_at: new Date(),
        category: "stadium",
      },
    ],
  });
};

const main = async () => {
  console.log("seeding the database");

  await createUser();
  await createVenue();
  await createEvent();
  await createTicket();
  await createOrder();
  await createComment();
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

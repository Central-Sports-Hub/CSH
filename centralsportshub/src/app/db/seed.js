const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const createUser = async() => {
    console.log('creating user');

    await prisma.user.createMany({
        data: [
            {email: 'dummy@aol.com', firstName: 'dummy', lastName:'dummy', password: 'dummy', isAdmin: false},
            {email: 'somaan@aol.com', firstName: 'somaan', lastName:'iqbal', password: 'somaan', isAdmin: true},
            {email: 'travynn@aol.com', firstName: 'travynn', lastName:'ippolito', password: 'travynn', isAdmin: true},
            {email: 'steven@aol.com', firstName: 'steven', lastName:'kaste', password: 'steven', isAdmin: true},
        ],
    })
}

const createVenue = async() => {
    console.log('creating venue');

    await prisma.venues.createMany({
        data: [
            {name: 'ATT Stadium', location: 'Arlington, Texas', home_team: 'Dallas Cowboys', capacity: 80000, img_url: 'n/a' },
            {name: 'Dodger Stadium', location: 'Los Angeles, California', home_team: 'Los Angeles Dodgers', capacity: 56000, img_url: 'n/a' },
        ],
    })
}

const createEvent = async() => {
    console.log('creating event');
    
    await prisma.event.createMany({
        data: [
            {venue_id: 1, team1: 'Dallas Cowboys', team2: "Greenbay Packers", start_time: new Date, sport: 'Football'},
            {venue_id: 2, team1: 'Philadelphia Eagels', team2: "Tampa bay buccaneers", start_time: new Date, sport: 'Football'},
        ],
    })
}

const createTicket = async() => {
    console.log('creating ticket');
    
    await prisma.ticket.createMany({
        data: [
            {event_id: 1, owner_id: 1, section: 1, seat: 1, row: 1, price: 10.00, date: new Date},
            {event_id: 2, owner_id: 2, section: 2, seat: 2, row: 2, price: 20.00, date: new Date},
        ],
    })
}
const createOrder = async() => {
    console.log('creating order');

    await prisma.order.createMany({
        data: [
            {user_id: 1, ticket_id: 2, created_at: new Date},
            {user_id: 2, ticket_id: 1, created_at: new Date},
        ]
    })
    
}
    

const createComment = async() => {
    console.log('creating comment');

    await prisma.comments.createMany({
        data: [
            {venue_id: 1, user_id: 1, comment_text: 'This stadium doo doo', created_at: new Date, category: 'stadium'},
            {venue_id: 2, user_id: 2, comment_text: 'This stadium Boo Boo', created_at: new Date, category: 'stadium'},
        ],
    })
}

const main = async() => {
    console.log("seeding the database");

    await createUser();
    await createVenue();
    await createEvent();
    await createTicket();
    await createOrder();
    await createComment();
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
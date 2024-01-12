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

const createOrder = async() => {
    console.log('creating order');


}

const createEvent = async() => {
    console.log('creating event');

    await prisma.event.createMany({
        data: [
            {}
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


const createVenue = async() => {
    console.log('creating venue');

    await prisma.venue.createMany({
        data: [
            {}
        ],
    })
}

const createComment = async() => {
    console.log('creating comment');

    await prisma.comment.createMany({
        data: [
            {}
        ],
    })
}

const main = async() => {
    console.log("seeding the database");

    await createUser();
    // await createOrder();
    await createTicket();
    // await createEvent();
    // await createVenue();
    // await createComment();
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
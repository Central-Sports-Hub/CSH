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

const main = async() => {
    console.log("seeding the database");

    await createUser();
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
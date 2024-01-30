const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req, { params }) {

  try {
    // create checkout sessions from body params
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: 'price_1Oe8r8HqqFCjsPWYV4zYyxsS',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `http://localhost:3000/checkout`,
      cancel_url: `http://localhost:3000/checkout`,
    });
    console.log('hi');
    console.log(session.url);

    return new Response(JSON.stringify({redirectUrl:session.url}));    

  } catch (err) {
    console.log(`error: ${err}`)

  }

  // TODO: checkout a user's cart
  // TODO: maybe mock a payment gateway?
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const base url = some ternary / verce/ localhost
export async function POST(req, { params }) {
  console.log("hello chris")

// console.log("req",await req.json())
const jsonRequest = await req.json()
const cartItems = jsonRequest.cartItems
console.log("cartItems", cartItems)
  try {
    // create checkout sessions from body params
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: 'payment',
      line_items: cartItems.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: `${item.event.team1} vs ${item.event.team2} @ section ${item.section} seat${item.seat} row${item.row}`
          },
          unit_amount: Math.ceil(item.price * 107.25)
        },
        // price: item.price * 100,
        quantity: item.quantity
      })),
      success_url: `http://localhost:3000/checkout/success`,
      // new page showing success of purchase
      cancel_url: `http://localhost:3000/tickets/all_tickets`,
      // back to ticket page for them to buy again
    });
    console.log('hi');
    console.log(session.url);

    return new Response(JSON.stringify({redirectUrl: session.url}));    

  } catch (err) {
    console.log(`error: ${err}`)

  }

  // TODO: checkout a user's cart
  // TODO: maybe mock a payment gateway?
}

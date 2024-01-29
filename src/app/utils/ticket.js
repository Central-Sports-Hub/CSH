async function addTicketToCart({ ticketId }) {
  // add a user's ticket to their cart
  try {
    // TODO: get a way to identify a user
    const userId = getCurrentUserId();

    // TODO: send a request to submit the ticket
    await submitTicketToCart(userId, ticketId);

    // Trigger a refresh of the page somehow
    window.location.reload();
  } catch (error) {
    console.error("Error adding ticket to cart:", error);
    alert("Error adding ticket to cart. Please try again.");
  }
}

async function checkoutCart() {
  alert("TODO: checkout cart");
  // TODO: figure out what happens when a user checks out?
}

export { addTicketToCart, checkoutCart };

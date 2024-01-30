//eslint-disable-next-line
import { useUser } from "@clerk/nextjs";
import { addTicketToCart } from "../utils/ticket";

export default function AddTicketToCart({ ticketId }) {
  const { user, isLoaded } = useUser();

  async function handleAddTicketToCart() {
    if (!user || !isLoaded) {
      console.error("User not loaded or not signed in");
      return;
    }

    try {
      await addTicketToCart({ ticketId, user });
    } catch (error) {
      console.error("Error adding ticket to cart:", error);
      alert("Error adding ticket to cart. Please try again.");
    }
  }

  return <button onClick={handleAddTicketToCart}>Add Ticket to Cart</button>;
}

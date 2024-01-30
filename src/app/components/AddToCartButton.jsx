"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import TicketUtils from "../../utils/TicketUtils";

export default function AddToCartButton({ ticket, price }) {
  const { user, isLoaded } = useUser();

  async function handleAddToCart() {
    if (!user || !isLoaded) {
      console.error("User not loaded or not signed in");
      return;
    }

    try {
      TicketUtils.addToCart(ticket, price);
    } catch (error) {
      console.error("Error adding ticket to cart:", error);
      alert("Error adding ticket to cart. Please try again.");
    }
  }

  return (
    <button onClick={handleAddToCart} className="btn btn-primary">
      Add to Cart!
    </button>
  );
}

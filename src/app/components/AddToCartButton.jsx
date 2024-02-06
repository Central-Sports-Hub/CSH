"use client";

import React, { useContext } from "react";
//eslint-disable-next-line
import { useUser } from "@clerk/nextjs";
import { Row } from "react-bootstrap";
import { CartContext } from "../providers";

export default function AddToCartButton({ ticket, price }) {
  const { user, isLoaded } = useUser();
  const { addToCart } = useContext(CartContext);

  async function handleAddToCart() {
    if (!user || !isLoaded) {
      console.error("User not loaded or not signed in");
      return;
    }

    try {
      addToCart(ticket, price);
    } catch (error) {
      console.error("Error adding ticket to cart:", error);
      alert("Error adding ticket to cart. Please try again.");
    }
  }

  return (
    <Row style={{ margin: "16px" }}>
      <button onClick={handleAddToCart} className="btn btn-success">
        Add to Cart!
      </button>
    </Row>
  );
}

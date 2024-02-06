"use client";
import { useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "react-bootstrap";
import { CartContext } from "../providers";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function PreviewPage() {
  const { cart, setCart } = useContext(CartContext);
  const handleClick = async () => {
    console.log("cart items:", cart);
    try {
      const response = await fetch("/api/cart/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItems: cart }),
      });
      const jsonResponse = await response.json();
      const redirectUrl = jsonResponse.redirectUrl;

      // console.log(jsonResponse)
      console.log(redirectUrl);
      setCart([]);

      window.location.assign(redirectUrl);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="btn btn-success m-2" onClick={handleClick}>
      Checkout
    </div>
  );
}

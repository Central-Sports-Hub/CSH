"use client";

import Button from "react-bootstrap/Button";
import { checkoutCart } from "../utils/ticket";

export default function Page() {
  return (
    <div>
      <div>MY CART</div>
      <Button onClick={checkoutCart}> CHECKOUT </Button>
    </div>
  );
}

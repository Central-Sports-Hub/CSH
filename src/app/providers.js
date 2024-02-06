"use client";

import { useEffect } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { createContext, useState } from "react";
import "./globals.css";

const CartContext = createContext();

function Providers({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(sessionStorage.getItem("cart") || "[]"));
  }, []);

  const updateCart = (newCart) => {
    sessionStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const removeFromCart = (ticketId) => {
    updateCart(cart.filter((item) => item.id !== ticketId));
  };

  const addToCart = (newItem) => {
    const existingItem = cart.find((item) => item.id === newItem.id);
    if (!existingItem) {
      updateCart([...cart, newItem]);
    }
  };

  return (
    <ClerkProvider>
      <CartContext.Provider
        value={{ cart, setCart: updateCart, addToCart, removeFromCart }}
      >
        {children}
      </CartContext.Provider>
    </ClerkProvider>
  );
}

export { Providers, CartContext };

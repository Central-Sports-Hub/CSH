"use client";

import React, { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { getCartItems, removeFromCart, checkoutCart } from "../utils/ticket";

export default function CartPage(cartItems) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    const items = await getCartItems();
    setCartItems(items);
  };

  const handleRemoveFromCart = async (id) => {
    await removeFromCart(id);
    loadCartItems();
  };

  const handleCheckout = async () => {
    await checkoutCart();
    loadCartItems();
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h2>My Cart</h2>
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col md={6}>{item.name}</Col>
                  <Col md={4}>${item.price}</Col>
                  <Col md={2}>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <h2>Cart Summary</h2>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Items:</Col>
                <Col>
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Total:</Col>
                <Col>
                  $
                  {cartItems.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )}
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
          <Button onClick={handleCheckout} className="mt-3">
            Checkout
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

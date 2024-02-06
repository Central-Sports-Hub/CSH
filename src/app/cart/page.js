"use client";

import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import CheckoutButton from "../checkout/page";
import { CartContext } from "../providers";

export default function Page() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <Container
      className="p-4 mt-4"
      style={{
        textAlign: "center",
        border: "3px solid gray",
        boxShadow: "0 20px 20px 10px rgba(1,1,1,1)",
        minHeight: "100%",
      }}
    >
      <Row>
        <Col md={8}>
          <h2>My Cart</h2>
          <ListGroup variant="flush">
            {cart.map((item) => (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col md={6}>
                    {item.event.team1} vs {item.event.team2}
                  </Col>
                  <Col md={4}>${item.price}</Col>
                  <Col md={2}>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
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
                <Col>{cart.length}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Total:</Col>
                <Col>${cart.reduce((acc, item) => acc + item.price, 0)}</Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
          {/* <Button onClick={handleCheckout} className="mt-3">
            Checkout
          </Button> */}
          <CheckoutButton />
        </Col>
      </Row>
    </Container>
  );
}

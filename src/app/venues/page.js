"use client";

import useSWR from "swr";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Venue from "../components/Venue";
import Header from "./Header";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Venues() {
  const { data: venues, isLoading } = useSWR("/api/venues", fetcher);

  if (isLoading) {
    return (
      <Header>
        <div className="row-auto content-center">Loading...</div>
      </Header>
    );
  }

  return (
    <>
      <Header></Header>
      <Container>
        <Row>
          {venues.map((venue) => (
            <Col xs={3} key={venue.id} className="row-span-3">
              <Venue {...venue} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

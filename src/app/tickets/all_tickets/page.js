"use client";

import { usePathname } from "next/navigation";
import useSWR from "swr";
import Ticket from "../../components/Ticket";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Tickets() {
  // get sport from router

  // TODO: get tickets using sport
  const { data: tickets, isLoading } = useSWR(`/api/tickets/event`, fetcher);
  console.log("tickets", tickets);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className="my-4, p-4 text-center" style={{ color: "white" }}>
        Available Tickets
      </h1>
      <Container
        style={{
          marginTop: "43px",
          border: "3px solid gray",
          boxShadow: "0 20px 20px 10px rgba(1,1,1,1)",
          minHeight: "100%",
          paddingBottom: "3%",
        }}
      >
        <Row xs={1} md={5} className="g-4 mt-5">
          {tickets?.map((ticket) => (
            <Col
              xs={3}
              key={ticket.id}
              className="row-span-3"
              style={{ paddingBottom: "10px" }}
            >
              <Ticket {...ticket} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

"use client";

import { usePathname } from "next/navigation";
import useSWR from "swr";
import Ticket from "../../components/Ticket";
import { Container, Col, Row } from "react-bootstrap";
import AddToCartButton from "../../components/AddToCartButton";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Tickets() {
  // get sport from router

  const path = usePathname();
  const sport = path.split("/").slice(-1)[0];

  // TODO: get tickets using sport
  const { data: tickets, isLoading } = useSWR(
    `/api/tickets/sport/${sport}`,
    fetcher
  );
  console.log("tickets", tickets);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container
      style={{
        marginTop: "43px",
        border: "3px solid gray",
        boxShadow: "0 20px 20px 10px rgba(1,1,1,1)",
        minHeight: "100%",
        paddingBottom: "100px",
      }}
    >
      <h1 className="my-4, p-4 text-center" style={{ color: "white" }}>
        {" "}
        Available Tickets
      </h1>
      <Row xs={1} md={5} className="g-4">
        {tickets?.map((ticket) => (
          <Col xs={3} key={ticket.id} className="row-span-3 mb-3">
            <Ticket {...ticket} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

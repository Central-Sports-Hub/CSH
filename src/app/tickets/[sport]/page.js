"use client";

import { usePathname } from "next/navigation";
import useSWR from "swr";
import Ticket from "../../components/Ticket";
import { Card, Button, Row } from "react-bootstrap";
import { addTicketToCart } from "../../utils/ticket";

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
    <>
      <h1 className="my-4, p-4 text-center"> Available Tickets</h1>
      <Row xs={1} md={5} className="g-4">
        {tickets?.map((ticket) => (
          <Card
            key={ticket.id}
            className="m-3 p-3 bg-cyan-900 text-center"
            style={{ width: "18rem", color: "lightgrey" }}
          >
            <Card.Body>
              <Ticket {...ticket} />
              <Button
                onClick={() => addTicketToCart({ ticketId: ticket.id })}
                style={{
                  color: "grey",
                  textDecoration: "none",
                  cursor: "pointer",
                  display: "inline-block",
                  transition: "box-shadow 0.9s, transform 0.9s",
                }}
                onMouseOver={(e) => {
                  e.target.style.boxShadow =
                    "0 8px 16px rgba(255, 255, 255, 0.5)";
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseOut={(e) => {
                  e.target.style.boxShadow = "none";
                  e.target.style.transform = "scale(1)";
                }}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </>
  );
}

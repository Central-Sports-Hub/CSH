"use client";

import { usePathname } from "next/navigation";
import useSWR from "swr";
import Ticket from "../../components/Ticket";
import { Card, Button } from "react-bootstrap";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Tickets() {
  // get sport from router
  const path = usePathname();
  const sport = path.split("/").slice(-1)[0];

  // TODO: get tickets using sport
  const { data: tickets, isLoading } = useSWR(
    `/api/ticket/sport/${sport}`,
    fetcher
  );
  console.log("tickets", tickets);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className="my-4">Tickets</h1>
      {tickets?.map((ticket) => (
        <Card key={ticket.id} style={{ width: "18rem" }}>
          <Card.Body>
            <Ticket {...ticket} />
            <Button>Purchase Ticket</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

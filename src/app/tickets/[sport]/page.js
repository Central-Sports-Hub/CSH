"use client";

import { usePathname } from "next/navigation";
import useSWR from "swr";

import Ticket from "../../components/Ticket";

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
    <div>
      <h1>Tickets</h1>
      <div className="grid grid-rows-3 grid-flow-col">
        {tickets?.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-green-500 rounded-lg m-4 h-12"
            style={{ height: "auto" }}
          >
            <Ticket {...ticket} />
          </div>
        ))}
      </div>
    </div>
  );
}

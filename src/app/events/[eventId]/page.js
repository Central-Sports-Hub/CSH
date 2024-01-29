import { usePathname } from "next/navigation";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());
const { data, error, isLoading } = useSWR("/api/user", fetcher);

export default function Event() {
  const path = usePathname();
  const eventId = path.split("/").slice(-1)[0];
  const { data: tickets, isLoading } = useSWR(
    `/api/ticket/event/${eventId}`,
    fetcher
  );

  return (
    <ul>
      <h1>TICKETS</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        tickets?.map((ticket) => (
          <li key={ticket.id}>
            <Link href={`/venues/${ticket.event.venue_id}`}>
              Venue: {ticket.event.venue.name}
            </Link>
            <div>Date: {ticket.date} </div>
            <div>Section: {ticket.section}</div>
            <div>Row: {ticket.row}</div>
            <div>Price: {ticket.price}</div>
          </li>
        ))
      )}
    </ul>
  );
}

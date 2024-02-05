import Link from "next/link";

export default function Venue({ id, event, row, seat, price, section }) {
  const name = event.team1 + " vs " + event.team2;
  const venueId = event.venue_id
  return (
    <div className="row-span-3">
      <Link href={`/venues/${venueId}`}>
        <div className="text-blue-600 hover:text-orange-500">{name}</div>
      </Link>

      <div>Price: {price}</div>
      <div>Section: {section}</div>
      <div>Row: {row}</div>
      <div>Seat: {seat}</div>
    </div>
  );
}

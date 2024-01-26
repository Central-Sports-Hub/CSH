import Link from "next/link";
import { Card } from "react-bootstrap";
export default function Event({
  id,
  sport,
  start_time,
  team1,
  team2,
  venue_id,
}) {
  return (
    <div className="col-span-1">
      <Link href={`../events/${id}`}>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div>{sport}</div>
            <div className="text-blue-600 hover:text-orange-500">
              {team1} vs {team2}
            </div>
            <div>{start_time}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

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
    <div
      style={{
        backgroundColor: "rgb(88, 88, 88)",
        border: "3px solid grey",
        width: "50%",
        marginBottom: "30px",
        paddingLeft: "10px",
      }}
    >
      <Link
        href={`../events/${id}`}
        style={{ color: "white", textDecoration: "none" }}
      >
        <div>
          <div>
            <div>{sport}</div>
            <div>
              {team1} vs {team2}
            </div>
            <div>{start_time}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

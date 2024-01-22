import Link from "next/link"

export default function Event({id, sport, start_time, team1, team2, venue_id}) {
  return (
    <div className="row-span-3">
      <Link href={`../events/${id}`}>
        <div>{sport}</div>
        <div className="text-blue-600 hover:text-orange-500">{team1} vs {team2}</div>
        <div>
          {start_time}
        </div>
      </Link>

    </div>
  )
}

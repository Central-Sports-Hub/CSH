import Link from "next/link"

export default async function Venues() {
  const venues = await fetch(process.env.APIpath + '/api/venues').then(res => res.json())

  return (
    <div>
      <h1>Venues</h1>

      {venues.map(venue => (
        <div>
          <Link href={`./venues/${venue.id}`}>
            <div>{venue.name}</div>
          </Link>
        </div>
      ))}

    </div>
  )
}

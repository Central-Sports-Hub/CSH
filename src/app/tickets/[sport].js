import Link from "next/link"

export default async function Tickets() {
  // TODO: get sport from router
  // TODO: get tickets using sport
  const tickets = await fetch(process.env.APIpath + '/api/venues').then(res => res.json())

  return (
    <div>
      <h1>Tickets</h1>
      {tickets.map(ticket => (
        <div>{ticket.name}</div>
        )}
        </div>
    )
  }

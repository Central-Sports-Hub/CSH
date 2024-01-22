export function Tickets() {
  // TODO: get sport from router
  // TODO: get tickets using sport
  const tickets = []

  return (
    <div>
      <h1>Tickets</h1>
      {tickets.map(ticket => (
        <div>{ticket.name}</div>
      )}
    </div>
  )
}

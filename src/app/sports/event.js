export default function Event({
  event_name,
  event_date,
}) {
  return (
    <div>
      <h1>{event_name}</h1>
      <p>{event_date}</p>
    </div>
  )
}

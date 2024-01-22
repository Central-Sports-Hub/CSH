"use client";

import { usePathname } from "next/navigation";

export default async function Venues() {
  const path = usePathname()
  const venueId  = path.split('/').slice(-1)[0];
  const venue = await fetch(`${process.env.APIpath}/api/venues/${venueId}`).then(res => res.json())

  return (
    <div>
      <h1>Venue</h1>
      <div>{venue.name}</div>
      <div>{venue.location}</div>
      <div>{venue.home_team}</div>
      <div>{venue.capacity}</div>
    </div>
  )
}

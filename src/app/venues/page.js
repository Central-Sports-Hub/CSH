"use client";

import useSWR from 'swr'

import Venue from "../components/Venue";
import Header from "./Header";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Venues() {
  const { data: venues, isLoading } = useSWR(
    '/api/venues',
    fetcher,
  )

  if (isLoading) {
    return (
      <Header>
        <div className="row-auto content-center">
          Loading...
        </div>
      </Header>
    )
  }

  return (
    <Header>
      {venues.map(venue => (
        <div
          key={venue.id}
          className="row-span-3"
        >
            <Venue {...venue} />
        </div>
      ))}
    </Header>
  )
}

"use client";

import { usePathname } from "next/navigation";
import useSWR from "swr";

import Header from "../Header";
import Venue from "../../components/Venue";
import Event from "../../components/Event";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Venues() {
  const path = usePathname();
  const venueId = path.split("/").slice(-1)[0];
  const { data: venue, isLoading } = useSWR(`/api/venues/${venueId}`, fetcher);
  const { data: events, isLoading: eventsIsLoading } = useSWR(
    `/api/events/venue/${venueId}`,
    fetcher
  );
  console.log(events);
  if (isLoading) {
    return (
      <Header>
        <div className="content-center">Loading...</div>
      </Header>
    );
  }

  return (
    <>
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h1>Venues</h1>
        <div
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          className="grid grid-rows-3 grid-flow-col"
        >
          <Venue
            {...venue}
            class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center"
          />
          <div>
            <h1> EVENTS:</h1>
            <div className="grid grid-cols-2 items-center">
              {events?.map((event) => (
                <Event key={event.id} {...event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

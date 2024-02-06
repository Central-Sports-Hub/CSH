"use client";

import { usePathname } from "next/navigation";
import useSWR from "swr";

import Header from "../Header";
import Venue from "../../components/Venue";
import Event from "../../components/Event";
import Comment from "@/app/components/Comment";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Venues() {
  const path = usePathname();
  const venueId = path.split("/").slice(-1)[0];
  const { data: venue, isLoading } = useSWR(`/api/venues/${venueId}`, fetcher);
  const { data: events, isLoading: eventsIsLoading } = useSWR(
    `/api/events/venue/${venueId}`,
    fetcher
  );
  const { data:comment } = useSWR(`/api/venues/comments/${venueId}`, fetcher);
  console.log(events);
  if (isLoading) {
    return (
      <Header>
        <div className="content-center">Loading...</div>
      </Header>
    );
  }

  return (
    <Header>
      <div className="grid grid-cols-2 items-center">
        <Venue {...venue} />
        <div>
          <h1> EVENTS:</h1>
          <div className="grid grid-cols-2 items-center">
            {events?.map((event) => (
              <Event key={event.id} {...event} />
            ))}
          </div>
          <h1>COMMENTS:</h1>
          <div>
            {comment?.map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))}
          </div>
        </div>
      </div>
    </Header>
  );
}

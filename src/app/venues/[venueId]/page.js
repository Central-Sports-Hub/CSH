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
  const { data: comment } = useSWR(`/api/venues/comments/${venueId}`, fetcher);
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "43px",
          boxShadow: "0 20px 20px 10px rgba(1,1,1,1)",
          minHeight: "100%",
          background: "rgb(88, 88, 88)",
          color: "white",
          maxWidth: "75%",
          border: "3px solid grey",
          paddingLeft: "20px",
          paddingTop: "20px",
          marginLeft: "13%",
        }}
      >
        <Venue {...venue} />
        <div>
          <h1 style={{ color: "white", textDecoration: "underline" }}>
            {" "}
            EVENTS:
          </h1>
          <div>
            {events?.map((event) => (
              <Event key={event.id} {...event} />
            ))}
          </div>
          <h1 style={{ color: "white", textDecoration: "underline" }}>
            COMMENTS:
          </h1>
          <div style={{ paddingBottom: "40px" }}>
            {comment?.map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))}
          </div>
        </div>
      </div>
    </Header>
  );
}

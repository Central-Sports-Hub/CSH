"use client";

import useSWR from "swr";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Venue from "../components/Venue";
import Header from "./Header";
import Sport from "./Sport";

const fetcher = (url) => fetch(url).then((res) => res.json());
// const { data, error, isLoading } = useSWR("/api/user", fetcher);

export default function Venues() {
  const { data: venues, isLoading } = useSWR("/api/venues", fetcher);

  if (isLoading) {
    return (
      <Header>
        <div className="row-auto content-center">Loading...</div>
      </Header>
    );
  }

  console.log(venues);
  const nfl = venues.filter((venue) => venue.sport === "NFLLogoBlack.jpeg");
  const mlb = venues.filter((venue) => venue.sport == "MLBNew.jpeg");
  const nhl = venues.filter((venue) => venue.sport === "NHL.jpeg");
  const nba = venues.filter((venue) => venue.sport === "NBALogo.jpeg");
  const mls = venues.filter((venue) => venue.sport === "MLS.jpeg");

  return (
    <>
      <Header />
      <Container>
        <Sport sport="NFL" venues={nfl} />
        <Sport sport="MLB" venues={mlb} />
        <Sport sport="NHL" venues={nhl} />
        <Sport sport="NBA" venues={nba} />
        <Sport sport="MLS" venues={mls} />
      </Container>
    </>
  );
}

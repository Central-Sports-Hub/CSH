"use client";

import useSWR from "swr";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Card, Container } from "react-bootstrap";

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
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "60px",
          border: "3px solid gray",
          boxShadow: "0 20px 20px 10px rgba(1,1,1,1)",
          height: "100%",
        }}
      >
        <Sport sport="NFL" venues={nfl} logoSrc={"NFLLogoBlack.jpeg"} />
        <Sport sport="MLB" venues={mlb} logoSrc={"MLBNew.jpeg"} />
        <Sport sport="NHL" venues={nhl} logoSrc={"NHL.jpeg"} />
        <Sport sport="NBA" venues={nba} logoSrc={"NBALogo.jpeg"} />
        <Sport sport="MLS" venues={mls} logoSrc={"MLS.jpeg"} />
      </Container>
    </>
  );
}

"use client";

import useSWR from "swr";
import { redirect, usePathname } from "next/navigation";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Header from "../../Header";
import Sport from "../../Sport";

const fetcher = (url) => fetch(url).then((res) => res.json());
// const { data, error, isLoading } = useSWR("/api/user", fetcher);

export default function Venues() {
  const { data: allVenues, isLoading } = useSWR("/api/venues", fetcher);
  const path = usePathname();
  let selectedSport = path.split("/").slice(-1)[0];
  if (isLoading) {
    return (
      <Header>
        <div className="row-auto content-center">Loading...</div>
      </Header>
    );
  }

  const nfl = allVenues.filter((venue) => venue.sport === "NFLLogoBlack.jpeg");
  const mlb = allVenues.filter((venue) => venue.sport == "MLBNew.jpeg");
  const nhl = allVenues.filter((venue) => venue.sport === "NHL.jpeg");
  const nba = allVenues.filter((venue) => venue.sport === "NBALogo.jpeg");
  const mls = allVenues.filter((venue) => venue.sport === "MLS.jpeg");

  let venues;
  let x;
  switch (selectedSport) {
    case "NFL":
      venues = nfl;
      break;
    case "MLB":
      console.log("MLB?");
      venues = mlb;
      break;
    case "NHL":
      venues = nhl;
      break;
    case "NBA":
      venues = nba;
      break;
    case "MLS":
      venues = mls;
      break;
    default:
      redirect("/venues/sport/NFL");
    // selectedSport = "NFL";
    // venues = nfl;
  }
  console.log("venues", venues);

  return (
    <>
      <Header />
      <Container>
        <Sport sport={selectedSport} venues={venues} />
      </Container>
    </>
  );
}

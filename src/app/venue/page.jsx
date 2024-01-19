"use client";

import { useParams, useRouter } from "next/navigation";

import React from "react";

async function getVenue(sport) {
  if (sport === "football") {
  } else {
    sport === "soccer";
    return ["venue 1", "venue 2"];
  }
  return [];
}

const Venue = async () => {
  const { venue } = useParams();

  const sport = await getVenue(sport);

  return (
    <>
      <h1>venue: {sport}</h1>
      <div>
        {venue.map((sport) => (
          <div>
            <h2>{venue}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Venue;

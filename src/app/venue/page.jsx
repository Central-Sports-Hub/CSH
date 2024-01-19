import React from "react";
import Event from "../../components/Venue";

const eventData = {
  name: "Example Event",
  location: "Example Location",
  homeTeam: "Example Home Team",
  capacity: 1000,
  imgUrl: "https://example.com/image.jpg",
  comments: ["This is a great event!", "I can't wait to attend!"],
  event: {}, // Add any additional event data here
};

const VenuePage = () => {
  return (
    <div>
      <h1>Venue Page</h1>
      <Venue {...venueData} />
    </div>
  );
};

export default VenuePage;

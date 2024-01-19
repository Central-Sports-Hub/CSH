import React from "react";
import Image from "next/image";
import { Link } from "react-router-dom";

function Venue({
  name,
  location,
  homeTeam,
  capacity,
  imgUrl,
  comments,
  event,
}) {
  return (
    <div className="venue">
      <Image src={imgUrl} alt={name} width={200} height={200} />
      <h2>{name}</h2>
      <p>Location: {location}</p>
      <p>Home Team: {homeTeam}</p>
      <p>Capacity: {capacity}</p>
      <h3>Event Details</h3>
      <p>Event: {event.title}</p>
      <p>Date: {event.date}</p>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <Link to={`/venues/${name}`}>More Info</Link>
    </div>
  );
}

export default Venue;

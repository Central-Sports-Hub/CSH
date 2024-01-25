import Link from "next/link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Venue({
  id,
  name,
  location,
  home_team,
  capacity,
  img_url,
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="default.svg" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <div>Location: {location}</div>
          <div>Home Team: {home_team}</div>
          <div>Capacity: {capacity}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

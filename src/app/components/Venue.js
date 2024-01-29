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
  console.log("img_url", img_url);
  return (
    <Card
      style={{ width: "18rem", height: "23rem" }}
      className="mb-3 bg-black text-white"
    >
      <Card.Img
        variant="top"
        src={`/pictures/${img_url || "ATTStadium.jpeg"}`}
        style={{
          width: "100%",
          height: "180px", // Adjust the height as needed
          objectFit: "cover", // Ensures the image covers the specified dimensions without stretching
        }}
      />
      <Card.Body>
        <Card.Title className="text-center">
          <Link
            href={`/venues/${id}`}
            style={{
              color: "gray",
              textDecoration: "none",
              cursor: "pointer",
              display: "inline-block",
              transition: "box-shadow 0.9s, transform 0.9s",
            }}
            onMouseOver={(e) => {
              e.target.style.boxShadow = "0 8px 16px rgba(255, 255, 255, 0.5)";
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.target.style.boxShadow = "none";
              e.target.style.transform = "scale(1)";
            }}
          >
            {name}
          </Link>
        </Card.Title>
        <Card.Text>
          <div>Location: {location}</div>
          <div>Home Team: {home_team}</div>
          <div>Capacity: {capacity}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

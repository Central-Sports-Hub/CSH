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
  sport,
}) {
  console.log("img_url", img_url);
  return (
    <Card
      style={{ width: "18rem", height: "26rem" }}
      className="mb-3 bg-black text-white"
    >
      <Card.Img
        variant="top"
        src={`/pictures/${img_url || "ATTStadium.jpeg"}`}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
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
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            <img
              style={{ height: "50px" }}
              src={sport && `/pictures/${sport}`}
            />
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

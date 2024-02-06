import Link from "next/link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AddToCartButton from "./AddToCartButton";

export default function Ticket(ticket) {
  const { event, price, section, row, seat } = ticket;
  const { img_url } = event.venue;
  const name = event.team1 + " vs " + event.team2;
  const venueId = event.venue_id;
  return (
    <Card
      className="m-1 bg-dark bg-gradient text-white align-items-center"
      style={{ minHeight: "100%", paddingBottom: "10px" }}
    >
      <Card.Img
        variant="top"
        src={`/pictures/${img_url || "ATTStadium.jpeg"}`}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          border: "2px solid gray",
        }}
      />

      <Link
        href={`/venues/${venueId}`}
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "16px",
          margin: "14px",
        }}
      >
        <div>{name}</div>
      </Link>

      <div>Price: {price}</div>
      <div>Section: {section}</div>
      <div>Row: {row}</div>
      <div>Seat: {seat}</div>
      <AddToCartButton
        ticket={
          ticket
        } /* need the prop to access the whole ticket not just the id*/
        price={price}
        style={{
          color: "grey",
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
      />
    </Card>
  );
}

import { useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Venue from "../components/Venue";

export default function Sport({ sport, venues, logoSrc, startHidden = true }) {
  const [hidden, setHidden] = useState(startHidden);
  const [height, setHeight] = useState("50px");
  console.log("hidden:", hidden);

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "10px",
        marginTop: "20px",
      }}
    >
      <Row>
        <h1
          className="mt-8 mb-8 text-center"
          style={{
            fontSize: "20pt",
            color: "gray",
            height: "80px",
            cursor: "pointer",
          }}
        >
          <div
            onClick={() => setHidden(!hidden)}
            onMouseOver={() => setHeight("60px")}
            onMouseOut={() => setHeight("50px")}
          >
            {logoSrc && (
              <img
                src={`/pictures/${logoSrc}`}
                style={{
                  marginRight: "8px",
                  verticalAlign: "middle",
                  width: height,
                  height: height,
                }}
              />
            )}
            {sport}
          </div>
        </h1>
      </Row>
      <Row
        style={{
          height: hidden ? "0" : "100%",
          transform: `scaleY(${hidden ? 0 : 1})`,
          transition: ".6s ease-in-out",
          overflow: "hidden",
        }}
      >
        {venues.map((venue) => (
          <Col xs={3} key={venue.id} className="row-span-3">
            <Venue {...venue} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

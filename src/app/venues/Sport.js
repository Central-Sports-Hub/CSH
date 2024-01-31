import { useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Venue from "../components/Venue";

export default function Sport({ sport, venues }) {
  const [hidden, setHidden] = useState(true);
  console.log("hidden:", hidden);

  return (
    <Container>
      <Row>
        <h1
          className="mt-8 mb-8 text-center"
          style={{ fontSize: "20pt", color: "white" }}
        >
          <div onClick={() => setHidden(!hidden)}>{sport}</div>
        </h1>
      </Row>
      <Row>
        {hidden ? (
          <div></div>
        ) : (
          venues.map((venue) => (
            <Col xs={3} key={venue.id} className="row-span-3">
              <Venue {...venue} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

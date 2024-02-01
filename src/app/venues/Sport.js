import { useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Venue from "../components/Venue";

export default function Sport({ sport, venues, logoSrc }) {
  const [hidden, setHidden] = useState(true);
  console.log("hidden:", hidden);

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "60px",
        marginTop: "20px",
      }}
    >
      <Row>
        <h1
          className="mt-8 mb-8 text-center"
          style={{ fontSize: "20pt", color: "gray" }}
        >
          <div onClick={() => setHidden(!hidden)} onMouseOver={""}>
            <img
              src={`/pictures/${logoSrc}`}
              style={{
                marginRight: "8px",
                verticalAlign: "middle",
                width: "50px",
                height: "50px",
              }}
            />
            {sport}
          </div>
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

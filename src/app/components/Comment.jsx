import { Card } from "react-bootstrap";

export default function Comment({ comment_text, created_at }) {
  return (
    <Card
      class="card"
      style={{
        backgroundColor: "rgb(88,88,88)",
        border: "3px solid grey",
        color: "white",
        width: "50%",
        marginBottom: "20px",
        paddingLeft: "10px",
      }}
    >
      <div>
        <div>{comment_text}</div>
        <div>{created_at.slice(0, 10)}</div>
      </div>
    </Card>
  );
}

//  className="card bg-base-100 shadow-xl card-body"

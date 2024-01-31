import Link from "next/link";

export default function VenueHeader({ children }) {
  return (
    <div>
      <Link href="/venues" style={{ textDecoration: "none" }}>
        <h1
          className="mt-8 mb-8 text-center"
          style={{
            fontSize: "30pt",
            color: "white",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          Venues
        </h1>
      </Link>
      {children}
    </div>
  );
}

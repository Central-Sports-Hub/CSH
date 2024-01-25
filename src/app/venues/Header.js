import Link from "next/link";

export default function VenueHeader({ children }) {
  return (
    <div>
      <Link href="/venues">
        <h1 className="mt-8 mb-8 text-center" style={{ fontSize: "20pt" }}>
          Venues
        </h1>
      </Link>
      {children}
    </div>
  );
}

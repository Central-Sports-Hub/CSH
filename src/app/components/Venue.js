import Link from "next/link";

export default function Venue({
  id,
  name,
  location,
  home_team,
  capacity,
  img_url,
}) {
  return (
    <div className="row-span-3">
      <Link href={`/venues/${id}`}>
        <div className="text-blue-600 hover:text-orange-500">{name}</div>
      </Link>

      <div>{location}</div>
      <div>{home_team}</div>
      <div>{capacity}</div>
    </div>
  );
}

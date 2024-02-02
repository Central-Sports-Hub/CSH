"use client";

import { useSearchParams } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();

  const search = searchParams.get("query");

  // URL -> `/app/venue`
  // `search` -> 'my-project'
  return (
    <>
      <div className="venue_card">
        <h1>CSH Results: {search}</h1>
        <p>Name: {""}</p>
      </div>
    </>
  );
}

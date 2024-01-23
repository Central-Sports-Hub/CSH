"use client";

import { usePathname } from "next/navigation";

const ALL_SPORTS = ["football", "soccer", "baseball", "hockey", "basketball"];

export default function Page() {
  const path = usePathname();
  const sport = path.split("/").slice(-1)[0];

  if (!ALL_SPORTS.includes(sport)) {
    return (
      <div>
        <h1>Invalid sport</h1>
      </div>
    );
  }

  return <div>{sport}</div>;
}

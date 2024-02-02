"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/search?query=${searchQuery}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (searchQuery) {
      fetchData();
    }
  }, [searchQuery]);

  return (
    <>
      <p>CSH Results for: {searchQuery}</p>
      <div>
        {searchResults.map((result) => (
          <div key={result.id}>
            <h3>{result.title}</h3>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

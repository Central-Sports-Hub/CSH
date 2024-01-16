"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();

  const onSearch = (event) => {
    event.preventDefault();

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);

    console.log("current query", searchQuery);
  };

  return (
    <form onSubmit={onSearch}>
      <input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
    </form>
  );
};

export default SearchInput;

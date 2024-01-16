"use client";
import React, { useState } from "react";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onSearch = (event) => {
    event.preventDefault();

    const encodedSearchQuery = encodeURI(searchQuery);

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

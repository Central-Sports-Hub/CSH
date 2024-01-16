"use client";
import React, { useState } from "react";

//Make for onChange
const searchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onSearch = ({ formEvent }) => {
    event.preventDefault();

    console.log("current query", searchQuery);
  };

  return (
    <form>
      <input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
    </form>
  );
};

export default searchInput;

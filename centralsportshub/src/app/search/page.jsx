"use client";
import React from "react";
import SearchInput from "../searchInput";
import { useSearchParams } from "next/navigation";

const page = () => {
  const search = useSearchParams();
  console.log("SEARCH PARAMS", search);
  const searchQuery = search ? search.get("q") : null;

  const encodedSearchQuery = encodeURI(searchQuery || "");
  console.log("SEARCH PARAMS", encodedSearchQuery);

  return (
    <div>
      SearchResults
      <SearchInput />
    </div>
  );
};

export default page;

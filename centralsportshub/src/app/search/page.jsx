import React from "react";
import SearchInput from "../searchInput";
import { useSearchParams } from "next/navigation";

const page = () => {
  const search = useSearchParams();
  console.log("SEARCH PARAMS", search);

  return (
    <div>
      SearchComponent
      <SearchInput />
    </div>
  );
};

export default page;

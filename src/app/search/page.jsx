"use client";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";
import Sport from "../venues/Sport";
import Header from "../venues/Header";
import Container from "react-bootstrap/Container";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SearchBar() {
  const searchParams = useSearchParams();
  const search = searchParams.get("query");
  const { data: venues, isLoading } = useSWR(
    `/api/venues/search?search=${search}`,
    fetcher
  );
  console.log("venues", venues);

  // URL -> `/`
  // `search` -> 'my-project'
  return (
    <>
      <Header />
      <Container>
        <Sport sport={"CSH Results"} venues={venues} />
      </Container>
    </>
  );
}

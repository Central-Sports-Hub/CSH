"use client";

import { usePathname } from "next/navigation";
import useSWR from "swr";

import Ticket from "../../components/Ticket";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Tickets() {
  // get sport from router
  const path = usePathname();
  const sport = path.split("/").slice(-1)[0];

  // TODO: get tickets using sport
  const { data: tickets, isLoading } = useSWR(
    `/api/ticket/sport/${sport}`,
    fetcher
  );
  console.log("tickets", tickets);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h1>Tickets</h1>
        <div
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          className="grid grid-rows-3 grid-flow-col"
        >
          {tickets?.map((ticket) => (
            <div
              key={ticket.id}
              className="items-center  bg-gray-400 rounded-lg m-4 p-4 flex flex-col justify-center"
              style={{ height: "auto" }}
            >
              <Ticket
                {...ticket}
                class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center"
              />
              <br></br>
              <a
                href="#"
                className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Purchase
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

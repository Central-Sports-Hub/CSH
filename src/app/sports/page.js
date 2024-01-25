import Event from "./event";
// import { useRouter } from "@next/navigation";
// import { getSports } from "???????";

export default async function Page() {
  const router = useRouter();
  const { sport } = router.query;
  // get all events given a sport
  // const events = await prisma.event.findMany({
  //   where: {
  //     sport: {
  //       equals: sport,
  //     },
  //   },
  // });
  const events = await getSports(sport.toUpperCase());

  return (
    <div>
      <h1>SPORTS</h1>
      {events.maps((event) => (
        <Event event={event} />
      ))}
    </div>
  );
}

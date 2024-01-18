import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-zinc-900 font-medium px-2 text-center">
        Hello World
      </h1>
      <Link className="text-zinc-900 font-small px-2" href="./users/">
        Users
      </Link>
      <br />
      <Link
        className="text-zinc-900 font-small content-center"
        href="./users/new/"
      >
        NewUsersPage
      </Link>
    </main>
  );
}

import Link from "next/link";
// import Userspage from "./users/";
// import NewUserPage from "./users/new/page";

export default function Home() {
  return (
    <main>
      <h1 className="text-zinc-900 font-medium">Hello World</h1>
      <Link className="text-zinc-900 font-small" href="./users/">
        Users
      </Link>
      <Link className="text-zinc-900 font-small" href="./users/new/">
        NewUsersPage
      </Link>
    </main>
  );
}

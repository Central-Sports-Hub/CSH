import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-zinc-900 font-medium">Hello World</h1>
      <Link href="/users">Users</Link>
    </main>
  );
}

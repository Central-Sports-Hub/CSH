import Link from "next/link"

export default function VenueHeader({children}) {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4 items-center  h-screen">
      <Link href="/venues">
        <h1 className="mt-8 mb-8" style={{ fontSize: '20pt' }}>Venues</h1>
      </Link>
      {children}
    </div>
  )
}

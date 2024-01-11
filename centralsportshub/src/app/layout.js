import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Central Sports Hub",
  description:
    "Sports Hub for football, soccer, futbol, baseball, basketball, professional sports, games. Search fields, arenas, venues, and locations. Ticketmaster, DraftKings, Fanatics, and others are available with tickets for sale by users. Athlete statistics and team rosters are presented with updated game schedules and weather",
  organization: "The Weak Links",
  authors: "S. Kaste, S. Iqbal, T. Ippolito",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
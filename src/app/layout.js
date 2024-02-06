import { Inter } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Providers } from "./providers";

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
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <Nav />
          {/* <SecondaryNav /> */}
          {children}
          <Footer />
        </body>
      </html>
    </Providers>
  );
}

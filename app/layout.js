import Navbar from "./components/navbar/Navbar";
import { Suspense } from "react";
import Loading from "./loading";
import Footer from "./components/footer/Footer.jsx"
import "./globals.css"

export default function RootLayout({
  children,
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}

export const metadata = {
  title: "Dailybyte",
  description: "Welcome!",
};

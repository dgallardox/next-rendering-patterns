import { Suspense } from "react";
import Loading from "./loading";
import "./globals.css";
import { Navbar, Footer } from "./components/index";

export const metadata = {
  title: "Dailybyte",
  description: "Welcome!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;

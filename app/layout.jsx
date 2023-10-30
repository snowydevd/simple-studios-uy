// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { GeistSans } from "geist/font";

export const metadata = {
  title: "Simple Studios",
  description: "Web designing Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

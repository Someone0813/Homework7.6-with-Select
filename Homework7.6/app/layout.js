import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Homework7.6 by Umarov",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="Container mx-auto">
        <nav className="flex max-w-screen-xl flex-wrap items-center justify-around mx-auto p-2  ">
          <Link className="li" href="/">
            Home
          </Link>
          <Link className="li" href="/about">
            About
          </Link>
          <Link className="li" href="/contact">
            Contact
          </Link>
          <img className="li" src="image.svg" alt="logo" />
          <Link className="li" href="/archive">
            Archive
          </Link>
          <Link className="li" href="/pro">
            Pro Version
          </Link>
          <Link className="li" href="/download">
            Download
          </Link>
        </nav>
        <div className="SelectDiv">
          <p>Select Category</p>
          <Link href="/FirstCategory" className="SelectLinks">Jewelery</Link>
          <Link href="/SecondCategory" className="SelectLinks">Men's clothing</Link>
          <Link href="/ThirdCategory" className="SelectLinks">Electronics</Link>
          <Link href="/" className="SelectBack">Back</Link>
        </div>
      </header>
        {children}</body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "@/app/styles/globals.css";
import Header from "@/app/layout/Header";
import Footer from "@/app/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "  ",
  description: "  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> {/* TODO: customize language */}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import {
  Geist,
  Geist_Mono,
  Lobster_Two,
  Poppins,
  Rancho,
} from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rancho = Rancho({
  variable: "--font-rancho",
  subsets: ["latin"],
  weight: "400",
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lobsterTwo = Lobster_Two({
  variable: "--font-lobsterTwo",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Food Delivery",
  description: "Task given by Bd-Calling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rancho.variable} ${poppins.variable} ${lobsterTwo.variable} font-poppins antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}

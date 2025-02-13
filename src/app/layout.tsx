import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat, Nunito_Sans } from "next/font/google";
import "./styles/globals.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  adjustFontFallback: false,
});
const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
  adjustFontFallback: false,
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Neukod",
  description: "New better generation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <div className={nunito_sans.className}>
          <Navigation />
        </div>
        {children}
        <div className={nunito_sans.className}>
          <Footer />
        </div>
      </body>
    </html>
  );
}

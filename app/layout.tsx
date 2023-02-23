import "./globals.css";
import MainNavigation from "../components/MainNavigation";
import FooterNavigation from "../components/FooterNavigation";
import CookieConsent from "../components/CookieConsent";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_MEASUREMENT_ID = "G-GW944XXWFN";
  return (
    <html lang="sv">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      
      <body>
        <MainNavigation></MainNavigation>
        {children}
        <FooterNavigation />
        <CookieConsent />
      </body>
    </html>
  );
}

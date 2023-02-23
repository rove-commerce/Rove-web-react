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
      <Script
        src={`<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        async
      />
      <Script id="google-analytics">
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());         
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>

      <body>
        <MainNavigation></MainNavigation>
        {children}
        <FooterNavigation />
        <CookieConsent />
      </body>
    </html>
  );
}

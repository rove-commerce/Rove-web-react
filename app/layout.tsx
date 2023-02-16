import "./globals.css";
import MainNavigation from "../components/MainNavigation";
import FooterNavigation from "../components/FooterNavigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      </body>
    </html>
  );
}

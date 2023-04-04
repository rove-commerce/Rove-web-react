import "./globals.css";
import MainNavigation from "../components/MainNavigation";
import FooterNavigation from "../components/FooterNavigation";
import CookieBar2 from "../components/CookieBar2";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "Rove | E-handel, martech och digital marknadsföring",
		template: "%s | rove.se | Sverige",
	},
	keywords: [
		"Upphandling",
		"Projektledning",
		"Rådgivning",
		"Förstudie",
		"Digital handel",
		"E-handel",
		"PIM",
		"Digital marknadsföring",
		"Kundresan",
		"Köpresan",
		"Litium",
		"HubSpot",
	],
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const GA_MEASUREMENT_ID = "G-GW944XXWFN";
	return (
		<html lang="sv">
			<Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
			<Script id="google-analytics" strategy="afterInteractive">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
			</Script>
			{/* Start of HubSpot Tracking Code */}
			<Script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/8359383.js"></Script>
			<body>
				<MainNavigation />
				{children}
				<FooterNavigation />
				{/*<CookieBar />*/}
			</body>
		</html>
	);
}

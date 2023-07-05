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
			{/* Google Tag Manager 
			<Script
				id="GTM"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KJMDBVM');`,
				}}></Script>
			*/}
			<body>
				{/* Google Tag Manager (noscript) 
				<noscript
					dangerouslySetInnerHTML={{
						__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KJMDBVM"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
					}}></noscript> */}
				<MainNavigation />
				{children}
				<FooterNavigation />
				{/*<CookieBar />*/}
			</body>
		</html>
	);
}

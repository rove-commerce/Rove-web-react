import type { Metadata } from "next";
import Content from "./om-rove.mdx";
import ContactForm from "../../components/ContactForm";
import PageHeader from "../../components/PageHeader";

export const metadata: Metadata = {
	title: "Om Rove",
	description: "Om Rove - e-handel, PIM, MarTech, digital marknadsföring, Litium, HubSpot",
};

export default function Home() {
	return (
		<>
			<PageHeader>Om Rove</PageHeader>
			<div className="bg-white py-20">
				<div className="wrapper">
					<div className="inner-wrapper">
						<div className="wysiwyg" style={{ maxWidth: "687px" }}>
							<h3>Rove</h3>
							<p>&quot;​a vigorous and purposeful journey without ever reaching your destination&quot;.</p>
							<h3>Så arbetar vi</h3>
							<p>
								Vi utgår alltid från affärsbehoven och användarupplevelsen. Utifrån tydliga affärsmål och användarbehov tittar vi på
								teknikfrågor och de interna processerna, inte tvärt om.
							</p>
							<p>
								Vi tycker om strukturkapital och bygger gärna in vår kunskap i metoder och paketeringar som ger våra kunder stort värde. Vi är
								också måna om att miminera våra kunders förvaltningskostnader och lägger därför stor vikt vid dokumentation och kvalitetssäkring
								av de lösningar vi levererar.
							</p>
							<h3>Bred kunskap inom digital handel</h3>
							<p>
								Vi har en djup och bred kompetens inom digital handel, både på affärs- och tekniksidan. Vi har varit e-handlare själva och
								förstår processerna och kundbehoven. Vi har också jobbat många år med produkt- och affärsutveckling på plattformssidan och har
								därför en djup förståelse för hur e-handelsplattformar fungerar, vilka krav man ska ställa vid val av plattform utifrån ens
								affärsmål och vilka styrkor olika plattformar har.
							</p>
						</div>
					</div>
				</div>
			</div>
			<ContactForm name="om-rove-form" />
		</>
	);
}

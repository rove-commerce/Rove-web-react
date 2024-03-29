import type { Metadata } from "next";
import PageHeader from "../../../components/PageHeader";

export const metadata: Metadata = {
	title: "Litium-utvecklare | Jobb",
	description: "Bli en Rover - Litium, e-handel, PIM, MarTech, digital marknadsföring.",
};

export default function Home() {
	return (
		<>
			<PageHeader>Litium-utvecklare</PageHeader>
			<div className="bg-white py-20">
				<div className="wrapper">
					<div className="inner-wrapper">
						<div className="wysiwyg" style={{ maxWidth: "687px" }}>
							<p>
								Nu startar vi Rove! Rove är ett nytt kunskapsföretag som med inspiration och utvecklade metoder hjälper företag att bli
								framgångsrika i sin e-handel och digitala marknadsföring. Vi erbjuder både konsulttjänster och egenutvecklade produkter.
							</p>
							<p>
								Vi vill nu bilda ett core-team som tillsammans ska bygga företaget från grunden. Ett team som delar samma ambition att skapa ett
								framgångsrikt och riktigt bra företag, med stark kultur och stort kundfokus som arbetar i frontlinjen inom teknik och digital
								handel.
							</p>
							<p>
								Fundamentet i Rove utgörs av en kundcentrisk, professionell och empatisk företagskultur. Vi vill ha en kultur av tillit med
								stort eget ansvar där vi inte detaljstyr varandra, med tydliga mål och mandat som uppmanar till egna initiativ och bra beslut.
							</p>
							<p>
								Vi tror att personlig utveckling och ständigt lärande är en viktig drivkraft. Faktiskt så viktig att vi har bestämt att det är
								Roves “Varför”. Att utvecklas gör arbetet roligt, vi blir duktiga på det vi gör och det ger våra kunder ett större värde.
							</p>
							<p>
								Och för att verkligen lyckas behöver vi ta hand om varandra, vi ska må bra dygnet runt och i livets alla skeden. Vi vill också
								skapa ett starkt incitament till att lyckas, utöver fast lön arbetar vi med en generös vinstdelningsmodell utifrån lagets
								resultat.
							</p>
							<h3>Vi ser gärna att du</h3>
							<ul>
								<li>Är en erfaren .Net/C#-utvecklare</li>
								<li>Har några års erfarenhet av att arbete med Litiums e-handelsplattform</li>
								<li>Du vill alltid lära och utvecklas och tycker om att utforska ny teknik</li>
								<li>Uttrycker dig väl i tal och skrift på svenska och engelska</li>
								<li>Är pragmatisk, kundcentrisk och bidrar till en positiv kultur</li>
								<li>Vill vara med och bygga bolag, du tycker om att arbeta metodiskt och bygga struktur och utveckla metoder</li>
							</ul>
							<h3>Du får också gärna ha</h3>
							<ul>
								<li>Erfarenhet av frontend-utveckling i React, Tailwind CSS och Foundation by Zurb</li>
								<li>Erfarenhet av att arbeta med Docker, Elasticsearch, Kibana och Redis</li>
								<li>Erfarenhet av att bygga integrationer </li>
							</ul>
							<p>
								Vi sitter i moderna lokaler vid Slussen i Stockholm eller jobbar hemifrån. Varmt välkommen med din ansökan till jobb@rove.se!
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

import type { Metadata } from "next";
import PageHeader from "../../../components/PageHeader";

export const metadata: Metadata = {
	title: "Tech Lead | Jobb",
	description: "Bli en Rover - Litium, e-handel, PIM, MarTech, digital marknadsföring.",
};

export default function Home() {
	return (
		<>
			<PageHeader>Tech Lead</PageHeader>
			<div className="bg-white py-20">
				<div className="wrapper">
					<div className="inner-wrapper">
						<div className="wysiwyg" style={{ maxWidth: "687px" }}>
							<h1>Varför Rove?</h1>
							<p>
								Nu startar vi Rove! Rove är ett nytt kunskapsföretag som med inspiration och utvecklade metoder hjälper företag att bli
								framgångsrika i sin e-handel. Vi vill nu bilda ett core-team som tillsammans ska bygga företaget från grunden. Ett team som
								delar samma ambition om att skapa ett framgångsrikt och riktigt bra företag, med stark kultur och stort kundfokus som arbetar i
								frontlinjen inom digital handel.
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
								För att verkligen lyckas behöver vi ta hand om varandra, vi ska må bra dygnet runt och i livets alla skeden. Vi vill också skapa
								ett starkt incitament till att lyckas, utöver fast lön arbetar vi med en generös vinstdelningsmodell utifrån lagets resultat.
							</p>
							<p>Några av fördelarna med att jobba med oss på Rove:</p>
							<ul>
								<li>
									Personlig utveckling - För oss är lärande och personlig utveckling viktigt! Vi vill att om du någon gång slutar på Rove så
									ska du ha mängder av spännande alternativ - och gå TILL något och inte FRÅN något.
								</li>
								<li>Laget före jaget - För oss är teamet viktigt! Vi bygger Rove tillsammans och tar hand om varandra.</li>
								<li>
									Välmående 24/7 - För att vi ska kunna möta den höga ambitionsnivå vi har tror vi på att välmående är en nyckel i livets alla
									skeden. Rätt utrustning, jobba hemma när livet kräver det, generöst friskvårdsbidrag mm. Vi har själva varit utvecklare och
									har förståelse för den arbetsmiljö yrket kräver.
								</li>
								<li>
									Välgörenhet - Vi vill att Rove skall vara en positiv och kärleksfull kraft i samhället och i världen. Vi vill att världen
									ska gå plus på Rove. Därför skänker vi en del av vinsten till välgörenhet. För oss är detta viktigt och skapar ett
									existentiellt syfte med hela bolaget.
								</li>
								<li>Individuell flexibilitet - Vi sitter i moderna coworking-lokaler centralt i Stockholm eller jobbar hemifrån.</li>
							</ul>
							<h1>Är vi en match?</h1>
							<p>
								I rollen som Tech Lead arbetar du för att vi ska leverera tekniska lösningar i världsklass som ger våra kunder ett stort värde.
								Du skapar våra tekniska processer, du tar fram vår tech stack och är drivande i att utvecklingsteamet hela tiden utvecklas.
							</p>
							<h3>Vi ser gärna att du...</h3>
							<ul>
								<li>är en erfaren .Net-arkitekt (men som också tycker om att koda själv)</li>
								<li>har flera års erfarenhet av att leverera e-handelslösningar, gärna på Litiums e-handelsplattform</li>
								<li>har erfarenhet av att leda utvecklingsteam</li>
								<li>uttrycker dig väl i tal och skrift på svenska och engelska</li>
								<li>är väl bekant med viktiga processer såsom agil utveckling, CI/CD, test, versionshantering och dokumentation</li>
							</ul>
							<h3>Som person...</h3>
							<ul>
								<li>är du pragmatisk, kundcentrisk och bidrar till en positiv kultur</li>
								<li>vill du vara med och bygga bolag, du tycker om att arbeta metodiskt och bygga struktur och utveckla metoder</li>
								<li>vill du alltid lära och utvecklas och tycker om att utforska ny teknik</li>
								<li>har du inget emot att hjälpa till i säljet som pre-sale</li>
							</ul>
							<p>Varmt välkommen med din ansökan till jobb@rove.se!</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

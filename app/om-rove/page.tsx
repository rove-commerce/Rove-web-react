import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "../../components/ContactForm";
import PageHeader from "../../components/PageHeader";
import OmtankeLogo from "../../public/LogoOmtanke.png";
import AmbitionLogo from "../../public/LogoAmbition.png";
import LearningLogo from "../../public/LogoLearning.png";

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
							<h2>Rove</h2>
						</div>
						<div className="flex items-center mb-4 pt-4 laptop:pt-0">
							<Image className="w-4 h-4 mr-2" alt="Lärande" src={LearningLogo} />
							<p className="text-blue text-18 font-semibold">Lärande</p>
							<Image className="w-4 h-4 mr-2 ml-5" alt="Omtanke" src={OmtankeLogo} />
							<p className="text-blue text-18 font-semibold">Omtanke</p>
							<Image className="w-4 h-4 mr-2 ml-5" alt="Ambition" src={AmbitionLogo} />
							<p className="text-blue text-18 font-semibold">Ambition</p>
						</div>
						<div className="wysiwyg" style={{ maxWidth: "687px" }}>
							<p>
								Rove är ett nystartat konsultföretag specialiserat på e-handel. Vi hjälper våra kunder att bli framgångsrika i sin digitala
								affär genom både affärsutveckling och teknikutveckling. Med mer än 20 års erfarenhet, både som konsulter och som e-handlare och
								anställda på e-handelsplattformar, förstår vi kundbehoven och kan tillföra en spetskompetens som gör stor skillnad för våra
								kunder. För oss är ständigt lärande viktigt och vi ser oss själva som upptäcktsresande med målet att skapa ett stort värde för
								våra kunder.
							</p>
							<p>
								För att lyckas tror vi att ständigt lärande är viktigt. Det är en resa som aldrig tar slut. Ordet Rove betyder just &quot;​a
								vigorous and purposeful journey without ever reaching your destination &quot; - en kraftfull och målmedveten upptäcksresa som
								aldrig tar slut.
							</p>
							<p>
								Med Rove vill vi skapa ett bolag med hög ambition att hela tiden bli bättre. Vi vill också skapa ett omtänktsamt bolag, vi ska
								ta hand om varandra och våra kunder. Därför bygger vi bolaget utifrån våra tre värderingar: Lärande, Omtanke och Ambition.
							</p>
							<h3>Djup kunskap inom digital handel</h3>
							<p>
								Vi har en djup och bred kompetens inom digital handel, både på affärs- och tekniksidan. Vi har varit e-handlare själva och
								förstår processerna och kundbehoven. Vi har också jobbat många år med produkt- och affärsutveckling på plattformssidan och har
								därför en djup förståelse för hur e-handelsplattformar fungerar, vilka krav man ska ställa vid val av plattform utifrån ens
								affärsmål och vilka styrkor olika plattformar har.
							</p>
							<h3>Fokus på er affär</h3>
							<p>
								Vi förstår er affär och slutkundens resa. Vi gör er framgångsrika genom att arbeta både med affärsutveckling och
								teknikutveckling. Affären främst, tekniken ska “bara funka”.
							</p>
							<h3>Långsiktiga relationer</h3>
							<p>
								Vi vill ha förtroliga och långsiktiga kundrelationer. Ett riktigt partnerskap som handlar om att skapa kundvärde, inte om att
								fakturera timmar. För att skapa ett sådant förtroende krävs ordning & reda, tydlig kommunikation, effektivitet, en hög ambition
								och ett långsiktigt kundteam. Vi tycker också det är viktigt att ibland utmana våra kunder, annars är det svårt att lyckas.
							</p>
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
						</div>
					</div>
				</div>
			</div>
			<ContactForm name="om-rove-form">Vill du veta mer om oss?</ContactForm>
		</>
	);
}

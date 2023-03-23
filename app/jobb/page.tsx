import type { Metadata } from "next";
import ReadLink from "../../components/ReadLink";
import ContactForm from "../../components/ContactForm";
import PageHeader from "../../components/PageHeader";

export const metadata: Metadata = {
	title: "Jobb",
	description: "Bli en Rover - e-handel, PIM, MarTech, digital marknadsföring.",
};

export default function Home() {
	return (
		<>
			<PageHeader>Jobb</PageHeader>
			<div className="bg-orange py-20">
				<div className="wrapper">
					<div className="inner-wrapper">
						<div className="wysiwyg" style={{ maxWidth: "687px" }}>
							<h3>Just nu söker vi</h3>
						</div>
						<p>
							<ReadLink href="/jobb/litium-arkitekt/" title="Litium-arkitekt (som vill vara med från början och bygga bolag)" />
						</p>
						<p>
							<ReadLink href="/jobb/litium-utvecklare/" title="Litium-utvecklare (som vill vara med från början och bygga bolag)" />
						</p>
						<p>
							<ReadLink href="/jobb/frontend-utvecklare/" title="Frontend-utvecklare (som vill vara med från början och bygga bolag)" />
						</p>
					</div>
				</div>
			</div>
			<div className="bg-white py-20">
				<div className="wrapper">
					<div className="inner-wrapper">
						<div className="wysiwyg" style={{ maxWidth: "687px" }}>
							<h3>Vill du bli en Rover?</h3>
							<p>
								Är du en erfaren utvecklare, projektledare eller strateg inom e-handel, PIM eller digital marknadsföring? Är du entreprenöriell
								och vill vara med att bygga upp ett företag, forma vårt erbjudande och vår kultur?
							</p>
							<p>
								​Vi vill bygga ett framgångsrikt och riktigt bra företag, med stark kultur och stort kundfokus. Vi ska vara ett värderingsdrivet
								kunskapsföretag som arbetar i frontlinjen inom digital handel. Vi ska arbeta med utvecklade metoder baserade på ny kunskap,
								erfarenhet, omvärldsbevakning och input från de bästa i branschen. Allt i syfte att göra våra kunder framgångsrika genom digital
								handel.
							</p>
							<h3>Vårt varför - ständig utveckling</h3>
							<p>
								Vi vill ständigt bli bättre. Att utvecklas och lära är motiverande. Det är vårt &quot;Varför&quot;. Det gör att vi kan ge våra
								kunder ett större värde.
							</p>

							<h3>Kultur & värderingar</h3>
							<p>
								Fundamentet i Rove utgörs av en kundcentrisk, professionell och empatisk företagskultur. Vi vill ha en kultur av tillit med
								stort eget ansvar där vi inte detaljstyr varandra, med tydliga mål och mandat som uppmanar till egna initiativ och bra beslut.
								Vi vill ha rak kommunikation med positiv feedback för att hjälpa varandra att utvecklas.
							</p>
							<p>Och för att verkligen lyckas behöver vi ta hand om varandra, vi ska må bra dygnet runt och i livets alla skeden.</p>
							<h3>Incitamentsprogram för delad framgång</h3>
							<p>
								Vi vill skapa ett starkt incitament till att lyckas, utöver fast lön arbetar vi med en generös vinstdelningsmodell utifrån
								lagets resultat.
							</p>
							<p>Vill du bli en Rover? Skicka din ansökan till jobb _at_ rove.se.</p>
						</div>
					</div>
				</div>
			</div>
			<ContactForm name="bli-en-rover-form" company={false}>
				Vill du bli en Rover?
			</ContactForm>
		</>
	);
}

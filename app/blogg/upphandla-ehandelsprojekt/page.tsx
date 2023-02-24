import type { Metadata } from 'next';
import Link from "next/link";
import Image from "next/image";
import BlogPostBody from "../../../components/BlogPostBody";
import BlogImage from "../../../public/blogg/upphandla-ehandelsprojekt.jpg";

export const metadata: Metadata = {
  title: "Blogg | Upphandla e-handelsprojekt",
  description: "Ska du upphandla ett e-handelsprojekt? I den här artikeln går vi igenom problem-topplistan och hur du bör göra istället.",
}

export default function Home() {
  return (
      <BlogPostBody author="Henrik Lundin" title="Upphandla e-handelsprojekt">
				<div className="tablet:w-1/2 float-right">
					<Image className="tablet:ml-4 mb-8" alt="Upphandla e-handelsprojekt" src={BlogImage} />
				</div>
				<p className="preamble">
					Det är knepigt att handla upp e-handelsprojekt. Eller snarare att få en lyckad leverans, ett väl fungerande partnerskap med leverantören och
					ett framgångsrikt införande. Man kan läsa massor om allmänna råd varför IT-projekt fallerar, man definierar inte målen tillräckligt väl, man
					planerar inte, man ser inte kundbehovet osv.
				</p>
				<p className="preamble">
					I den här artikeln vill jag bli lite mer konkret - vad du bör tänka på när du ska handla upp en leverantör och ett e-handelsprojekt - att
					utveckla, lansera och förankra en e-handel i er verksamhet.
				</p>
				<h3>Topplistan: de 5 vanligaste problemen</h3>
				<p>
					Alla organisationer har sina egna unika förutsättningar, men om man skulle generalisera lite och lyfta fram de 5 vanligaste problemen jag
					ser vid upphandling av e-handelsprojekt:
				</p>
				<ol>
					<li>Många upphandlingar är för tekniska eller funktionsinriktade, kundvärde och affärsmål behöver beskrivas tydligt</li>
					<li>Att få en bra relation med leverantören ges för låg prioritet</li>
					<li>Många missar att beskriva organisatoriska förutsättningar och det interna införandet</li>
					<li>
						Upphandlingsunderlaget är för detaljorienterat, man ger inte leverantören möjlighet att prioritera rätt för att nå de viktigaste målen
					</li>
					<li>Undvik en massiv slutleverans, mindre iterationer ger bättre resultat och ett mer förankrat införande</li>
				</ol>
				<p>
					Strax utanför topplistan, men ändå värt ett omnämnande: missförstånd kring agila metoder - hur man arbetar, vad som krävs av kunden och vad
					priset kommer att landa på.
				</p>
				<p>Oj ja, och så har vi ju själva lanseringen som är ett projekt i sig och ofta glöms bort helt och hållet.</p>
				<h3>Detta bör ingå i upphandlingsunderlaget</h3>
				<p>
					Du står inför att påbörja en upphandling. Du ska ta fram upphandlingsunderlag och bjuda in leverantörer. Men vad bör egentligen ingå i
					upphandlingsunderlaget?
				</p>
				<p>
					Ett bra upphandlingsunderlag sätter tonen i ert samarbete med leverantören och ska inbjuda till att leverantören verkligen kommer med sin
					bästa möjliga lösning. Det ska vara tydligt för att undvika missförstånd. Det ska visa att ni är en bra kund som man vill arbeta med. Det
					får inte vara för omfattande.
				</p>
				<div className="mb-2 text-18">Vi på Rove brukar utgå från följande uppsättning:</div>
				<ul>
					<li>
						En inbjudan som innehåller:
						<ul>
							<li>Upphandlingens tidplan - viktiga datum, exempelvis när upphandlingen ska vara inne, när presentation sker osv</li>
							<li>Projektets tidplan - önskat startdatum och hur ni tänker kring leveransdatum för projektets olika etapper och införande</li>
							<li>Vem som är ansvarig från er sida och kontaktvägar</li>
							<li>Hur ni vill ha pris - fast pris, löpande, agilt, takpris, optioner, granularitet i prisspecifikation mm.</li>
							<li>Utvärderingskriterier för val av leverantör (om ni vill berätta hur ni tänker)</li>
							<li>Vilka avtal och standardavtal ni vill använda</li>
							<li>Hur ni tänker kring rättningar och garantiperioder</li>
							<li>Svarsformat - är det en öppen offert eller enligt en speciell framtagen mall som ni bifogar upphandlingen?</li>
							<li>Om leverantören får använda sig av underkonsulter utan ert godkännande</li>
							<li>Vem som äger den källkod som tas fram i projektet</li>
						</ul>
					</li>
					<li>
						En kravspecifikation som innehåller:
						<ul>
							<li>Syfte och bakgrund</li>
							<li>Projektets affärsmål och dess förväntade effekt (“effektmål”)</li>
							<li>Krav (dela gärna upp dom på lämpligt sätt, user stories, funktionella krav, tekniska krav, integration etc)</li>
							<li>Vad ni förväntar er för kvalité och testning</li>
							<li>Legala krav och förutsättningar</li>
							<li>Dokumentation</li>
							<li>Installation och go-live</li>
							<li>Eventuella avgränsningar</li>
						</ul>
					</li>
				</ul>
				<p>
					Och glöm inte att vara tydliga i inbjudan med att leverantören inte får någon ersättning för att delta i upphandlingen samt att ni har rätt
					att utan skäl avbryta upphandlingen när som!
				</p>
				<h3>Viktigt att tänka på!</h3>
				<p>Vad är viktigt att tänka på? Om vi tittar på problem-topplistan ovan:</p>
				<h4>1. Formulera effektmål</h4>
				<p>
					Fokusera inte bara på vad som ska göras, funktioner och teknik - börja med effektmålen! Med effektmål menar jag den konkreta effekt ni
					förväntar er - vad det ska leda till - inte bara vad som ska göras (s.k. “projektmål”).
				</p>
				<p>
					Varför behöver leverantören ta del av era effektmål? Genom att vara tydliga med vad ni vill uppnå ger ni leverantören bättre möjlighet att
					göra ett bra jobb. Ni kan arbeta med lite mer fria tyglar och kommer då locka fram leverantörens bästa eftersom den förstår vad det hela
					syftar till. I bästa fall kan leverantören utmana er och föreslå bättre sätt att uppnå era effektmål.
				</p>
				<p>Exempel på effektmål: “Öka försäljning med 25 %” eller “50 % av försäljningen ska ske via vår e-handel”.</p>
				<h4>2. Leverantörsrelationen</h4>
				<p>
					Börja arbeta med en bra leverantörsrelation redan i upphandlingen! En bra leverantörsrelation är oerhört viktig i e-handelsprojekt eftersom
					det ofta handlar om lös materia och agila utvecklingsmetoder - man kan inte kravställa allt ifrån början, då blir samarbetet och
					samarbetsformerna än viktigare, prioritering blir viktigare, behoven av en gemensam målbild blir viktigare.
				</p>
				<div className="mb-2 text-18">Så ta chansen att redan i upphandlingsunderlaget:</div>
				<ul>
					<li>
						arbeta med <strong>tydlig kommunikation och var närvarande</strong> under upphandlingen, en kylig, vag och avvaktande attityd skapar
						inte rätt förutsättningar för ett bra samarbete. Dessutom kommer leverantören räkna in mer overhead i sitt prisförslag om den känner att
						ni är svåra att kommunicera med.
					</li>
					<li>
						<strong>berätta hur ni vill arbeta tillsammans</strong>, projektmetod och styrningsmetodik för projektet, arbeta agilt eller inte,
						iterativa leveranser etc.
					</li>
					<li>
						<strong>var tydliga med avtal och kommersiella villkor</strong>, berätta redan i upphandlingsunderlaget vilket standardavtal ni vill ha
						i botten, vem som betalar för felrättningar, hur ni vill att man ska offerera pris, hur detaljerade priserna ska anges, vem som får rätt
						till källkod osv.
					</li>
				</ul>
				<h4>3. Införandet</h4>
				<p>
					Många, och inom B2B skulle jag säga de flesta, e-handelsprojekt får problem under införandet. Att rulla ut en ny e-handelslösning med
					medföljande processer inom en organisation är en svår uppgift som kräver planering och engagemang från en större grupp inom företaget. Många
					e-handelsprojekt tar inte med införandet som en central del av i projektet. Möjligtvis har man stakeholders under projektets gång och
					planerar go-live-aktiviteter och utbildningar mot slutet, men oftast slutar projektet där. Man ser ofta införandet som en egen etapp, den
					sista i projektet. Man ser det som att leverantören lämnar över stafettpinnen till kunden när de sista buggarna rättats och utbildningarna
					är klara.
				</p>
				<p>
					Det finns flera problem med att lägga införande sist i projektet. Ett problem är att man får feedback från organisationen och kunderna för
					sent. Ett annat är att leverantören ser det som det sista som sker i projektet - eventuell feedback och förändringar som krävs blir mer av
					tillägg än planerat arbete. Men det allvarligaste problemet är att man inte ger organisationen (och kunderna) tid att anpassa sig för den
					nya e-handelsprocessen - man kastas ut i skarpt läge direkt och hamnar i en negativ spiral av släcka bränder, driva igenom förändringar
					samtidigt som man ska nå sina effektmål. Ta med införandet som en central del i projektet! Beskriv noggrant vilken organisation som finns på
					plats och andra organisatoriska förutsättningar. Var tydlig med att leverantören ansvarar för införandet. Lämna inte införandet till sist i
					projektet utan jobba med iterativa leveranser (se punkt 5 nedan) och involvera utvalda kunder och den egna organisationen så tidigt som
					möjligt i projektet.
				</p>
				<h4>4. Micro-management</h4>
				<p>
					Ett vanligt misstag är att upphandlingsunderlaget, ofta kravspecifikationen, är för detaljorienterad där den inte behöver vara det. Än värre
					är om den går in i för djupa tekniska detaljer. Det är bättre att arbeta med tydliga user stories och funktionella och tekniska krav på en
					högre nivå. Detaljering av krav kommer senare när projektet väl är igång.
				</p>
				<p>
					Poängen är att inte låsa leverantören till detaljkrav som inte är viktiga för att nå era mål. Arbeta istället med lite lösare tyglar och låt
					leverantören prioritera rätt och blomma ut - så länge ni är tydliga med vad ni vill uppnå och hur man mäter det. Exempel: istället för att
					detaljera hur SEO ska fungera kan man kravställa: “100 % Lighthouse SEO score”.
				</p>
				<p>
					Det är också viktigt att hålla en jämn nivå på kravens detaljeringsgrad, det är olyckligt om vissa krav är på en hög nivå och andra är nere
					i tekniska detaljer.
				</p>
				<h4>5. Iterativa leveranser</h4>
				<p>
					Fler leveranser är alltid bättre än en stor big bang! Känner du att det är svårt att dela upp projektet i mindre leveranser? Jo, det går.
					Blir det inte för mycket overhead? Nej, det lönar sig alltid.
				</p>
				<p>
					Du vill arbeta med mindre leveranser för på ett bättre sätt kunna ta in feedback och styra scope efter användarnas verkliga behov. Genom en
					iterativ kultur med feedback i varje leverans kommer ni få en lösning som ni vet verkligen funkar - den är redan testat av riktiga
					användare. Genom iterativa leveranser kommer ni också gradvis bygga upp den interna kompetens och de processer som behövs, det är en viktig
					del av införandet. Feedback tidigt i projektet ger bättre förankring, internt och hos kunder.
				</p>
				<p>
					Hur delar jag upp ett projekt i mindre leveranser? Det vanligaste sättet att jobba är att rulla ut nya funktioner mot en mindre delmängd av
					sina kunder/användare, eller styra en liten del av trafiken till den nya lösningen som samexisterar med den gamla.
				</p>
				<p>
					Var tydlig i upphandlingsunderlaget att ni vill arbeta med iterativa leveranser och att leverantören ska tänka in detta i sin leveransplan,
					när utbildningar ska ske, feedback-rundor etc.
				</p>
				<h3>Smått och gott</h3>
				<div className="mb-2 text-18">Några andra råd på vägen:</div>
				<ul>
					<li>Alla krav är inte skall-krav! Var noga med att inte prioritera krav som inte är väsentliga för att nå era effektmål.</li>
					<li>
						Red ut de kommersiella villkoren för rättningar av fel och garantiperioder, var tydlig med hur länge leverantören ska vara tillgänglig
						med projektteamet.
					</li>
					<li>
						För mindre e-handelsprojekt är individerna i teamet viktigare än leverantören, säkerställ att ni får med stjärnorna i teamet och att det
						inte kan förändras hur som helst.
					</li>
					<li>
						Ibland är avgränsningarna lika viktiga som funktionslistan, bespara leverantören mycket arbete genom att berätta vad som inte är med
						projektscopet
					</li>
				</ul>
				<p>
					Och sist men absolut inte minst - välj en leverantör som kan hela e-handelsprocessen, som har affärsförståelsen och kan
					verksamhetsprocesserna och inte bara teknik och “framsidan”.
				</p>
				<p>
					Vill du veta mer om hur vi på Rove arbetar med upphandling? Läs mer om vår tjänst 
					<Link href="/tjanster"> Rove Methods Upphandling här.</Link>
				</p>
		</BlogPostBody>
  );
}

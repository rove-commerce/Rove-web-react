import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BlogPostBody from "../../../components/BlogPostBody";
import BlogImage from "../../../public/blogg/TeknikenReactAccelerator.png";

export const metadata: Metadata = {
	title: "Blogg | Vi tar en titt på tekniken i Litiums nya Headless Accelerator",
	description: "Vi tar en titt på tekniken i Litiums nya Headless Accelerator",
};

export default function Home() {
	return (
		<BlogPostBody author="Henrik Lundin" title="Vi tar en titt på tekniken i Litiums nya Headless Accelerator">
			<div className="tablet:w-1/2 float-right">
				<Image className="tablet:ml-4 mb-8" alt="Techstacken i Litiums nya React Accelerator" src={BlogImage} />
			</div>
			<p className="preamble">
				Snart så, snart är den här. Litiums nya React-Accelerator för headless och composable commerce. Vi har tittat på techstacken och hur den nya
				Acceleratorn knyter ihop säcken med containeriseringen i Litiums nya Serverless Cloud.
			</p>
			<p>
				Det uppenbara syftet med Litiums nya React-Accelerator är att nå kunder som vurmar för headless/composable. Men minst lika viktigt är att öppna
				upp för frontend-utveckling i moderna JavaScript-ramverk och få en riktig separation av frontend och backend. Det är något som partners
				efterfrågat länge då det är mycket lättare att få tag på React-utvecklare än fullstack ASP.NET MVC-utvecklare. Utvecklingsprojekten (och
				uppgraderingsprojekten!) blir också tydligare och mer i linje med hur man är van att jobba.
			</p>
			<p>
				En annan fördel är att det är lättare att bygga ett rikt UX med React än MVC, vilket är en viktig del av Litiums värdeerbjudande. För att uppnå
				samma UX-nivå med MVC idag tvingas man helt enkelt väva in React i MVC, vilket skapar onödig komplexitet.
			</p>
			<p>
				Den nya React-Acceleratorn är ett ambitiöst projekt som på många sätt slutför ett tekniskt generationsskifte som pågått i flera år. Egentligen
				är det tre projekt som nu sammanstrålar - containeriseringen med Serverless Cloud, Storefront API och React-Acceleratorn.
			</p>
			<p>
				Redan för flera år sedan tog Litium det strategiska beslutet att satsa på containerteknologi snarare än att bygga ett rent “true SaaS-API” alá
				Shopify. Man ansåg att containerteknologi skulle ge kunderna exakt samma fördel med stabila webb-API:er och composable men samtidigt tillät en
				helt annan flexibilitet och lastförmåga plus möjligheten att kunden kan köra sin egna privata appar i Litiums moln så att de slipper ytterligare
				en driftlösning (exempelvis integrationsappar och Node.js-frontends). Ett svårt beslut, men så här i efterhand är det tydligt att det var rätt
				beslut.
			</p>
			<p>
				Den kommande lanseringen av nya Serverless Cloud slutför resan mot ett helt containeriserat Litium Commerce Cloud. Med det medföljande Cloud
				API:et kan partners och kunder sköta deployment och managering av sin miljö, helt automatiserat (mycket efterlängtat!).
			</p>
			<p>
				Nästa pusselbit, Litium Storefront API, är precis vad det låter som. Ett helt nyskrivet API för composable commerce. Designtanken med Storefront
				API har hela tiden varit att optimera API:et för krävande e-handel. Det betyder hög prestanda, GraphQL rakt igenom (så att man bara ska behöva
				hämta precis den info man behöver) och GraphQL Federation för att man ska kunna “unifiera” flera API:er till ett supergraph-API (utan att behöva
				koda). Storefront API:et är i princip read-only, tanken är att skriv ska ske via de befintliga ändamålsanpassade ConnectAPI:erna, exempelvis för
				att lägga order eller genomföra betalning.
			</p>
			<p>
				Sist men inte minst, React Acceleratorn, som likt Litiums tidigare Acceleratorer har skapats för att ge konkret kundvärde i form av (mycket!)
				lägre utvecklingskostnader plus en teknisk och affärsmässig best practice för hur man ska bygga och arbeta med e-handel. React Acceleratorn har
				jobbats fram tillsammans med några av Litiums partners, vilket nog var ett smart drag, och jag måste säga att ambitionen är mycket högre än vad
				jag först trodde.
			</p>
			<p>
				Jag hade trott att man först skulle göra ett mycket mindre scope, ett bare-bone där man i princip bara satte techstacken och byggde några av de
				svåraste vyerna. Så blir det inte. Den nya React-Acceleratorn kommer att täcka i princip all funktionalitet som MVC-Acceleratorn har. Helt klart
				ambitiöst.
			</p>
			<div className="mb-2 text-18">Ok, vad tycker vi om då om techstacken?</div>
			<ul>
				<li>React med Typescript och React Server Components</li>
				<li>Next.js (med nya app-foldern som fortfarande är i beta)</li>
				<li>TailwindCSS (hurra!)</li>
				<li>Apollo Client för GraphQL</li>
				<li>ESLint och Prettier</li>
				<li>Jest för unit tester</li>
				<li>Playwright för end-to-end tester</li>
			</ul>
			<p>
				Som ni ser är det en ganska opinionated tech stack. Bra! Det kommer att ge en mer standardiserad kodbas vilket har flera fördelar, bla får
				kunden ett mindre konsultberoende och man kan argumentera för att det ger en högre kvalité. Därtill är det näst intill en förutsättning för att
				kunna skapa add-ons och appar, för detta behövs en tydlig standard så att alla add-ons funkar för alla kunder.
			</p>
			<p>
				Att valet föll på React känns ganska självklart, det var det trygga valet. Det finns fler React-utvecklare att tillgå än för något annat ramverk
				och Litiums partnernätverk arbetar idag främst med React. Så inga konstigheter där. Däremot var valet av next.js viktigt, och inte lika
				självklart. Man kunde valt att stanna vid React och låta partners och kunder själva välja vilket React-ramverk man vill köra i. Jag är glad att
				man inte gjorde så, det hade motverkat syftet med att skapa en så hög grad av standardisering som möjligt (varje partner hade skapat sin egen
				konfiguration). Next.js adderar mycket grundfunktionalitet och är också ganska opinionated i hur man skapar lösningar vilket är i linje med
				Litiums grundsyn
			</p>
			<p>
				Vad jag vet har man inte landat i val av ramverk för global statehantering och cookie-hantering ännu. Man använder redan Context API för den
				faceterade söken, så sannolikt jobbar man vidare med den lösningen. Om Context API inte räcker hela vägen skulle jag gissa att Recoil ligger bra
				till. Vad gäller cookies så finns det i nuläget funktionalitet inbyggt i next.js för att läsa, men inte skriva. Antingen väntar man på att
				next.js även kan skriva cookies, eller så får man nog väva in cookie-react eller liknande. I båda frågorna vore det bra om Litium satte ner
				foten så att inte lösningar och add-ons börjar att spreta.
			</p>
			<p>
				Tailwind, inte mycket att kommentera där. Är det någon som inte gillar Tailwind? Det innebär att man väljer ett annat CSS-ramverk än i MVC
				Acceleratorn som använder Foundation by Zurb. Men att köra vidare med Foundation var inte görbart, så helt rätt beslut där.
			</p>
			<p>
				En sista reflektion - är React Acceleratorn tänkt att ersätta MVC Acceleratorn? Nej, jag ser att båda Acceleratorerna behövs. De har olika
				syften. MVC Acceleratorn är för mindre best practice projekt med snabb time-to-market, React Acceleratorn lämpar sig för mer ambitiösa projekt
				med hög UX-ambition. Båda kommer att supporteras av Litium och vid behov kan man ju även kombinera dom (MVC Acceleratorn innehåller redan en del
				React).
			</p>
			<p>That’s it for now, synpunkter eller tankar? Hör gärna av dig till henrik _at_ rove.se eller via LinkedIn!</p>
		</BlogPostBody>
	);
}

import type { Metadata } from 'next';
import Image from "next/image";
import BlogPostBody from "../../../components/BlogPostBody";
import BlogImage from "../../../public/blogg/PunchOut-ehandel.jpg";

export const metadata: Metadata = {
  title: "Blogg | PunchOut e-handel",
  description: "PunchOut e-handel - öppna en ny försäljningskanal till era kunder.",
}

export default function Home() {
  return (
    <BlogPostBody author="Henrik Lundin" title="PunchOut e-handel">
      <div className="tablet:w-1/2 float-right">
        <Image className="tablet:ml-4 mb-8" alt="PunchOut" src={BlogImage} />
      </div>
      <p className="preamble">
        PunchOut e-handel - öppna en ny försäljningskanal till era kunder.
      </p>
      <p className="preamble">
        Vad är PunchOut e-handel? PunchOut är en försäljningskanal där era
        kunder kan köpa från er e-handel direkt från sina inköpssystem. En
        inköpare kan använda sig av er e-handelswebbplats i sin ordinarie
        inköpsprocess.
      </p>
      <h3>Hur funkar det?</h3>
      <div className="mb-2 text-18">
        Genom en integration från kundens inköpssystem kan kunden plocka ihop
        “en varukorg” av era produkter på er e-handel för att sedan återvända
        till inköpssystemet och där slutföra ordern. Ett typiskt flöde:
      </div>
      <ol>
        <li>Inköparen loggar in i sitt inköpssystem.</li>
        <li>
          Inköparen väljer att slussas ut (“punch out”) till er
          e-handelswebbplats.
        </li>
        <li>
          På er e-handel blir inköparen automatiskt inloggad och får rätt
          sortiment, priser och kampanjer.
        </li>
        <li>Inköparen plockar ihop en varukorg.</li>
        <li>
          Istället för att slutföra köpet på er e-handel väljer inköparen att
          varukorgen ska skickas tillbaka till inköpssystemet.
        </li>
        <li>
          Väl tillbaka i inköpssystemet slutför inköparen ordern enligt
          ordinarie process.
        </li>
      </ol>
      <p>
        Vad är vitsen med att slussas ut till en extern e-handel? Varför inte
        bara importera alla produkter till inköpssystemet? Naturligtvis kan
        kunden välja att importera alla era produkter till sitt inköpssystem,
        antingen i en stor batchkörning eller hämta in ert sortiment i realtid.
        Då slipper ju inköparen gå utanför inköpssystemet - varför då köra
        PunchOut?
      </p>
      <div className="mb-2 text-18">
        Vitsen är att ni kan sälja mer genom att:
      </div>
      <ul>
        <li>
          ge inköparen en bättre användarupplevelse (och skapa en bättre
          relation med inköparen),
        </li>
        <li>lyfta fram era produkter på det sätt ni vill,</li>
        <li>hjälpa inköparen att hitta rätt produkt,</li>
        <li>arbeta med kundunik/personaliserad prissättning,</li>
        <li>lyfta fram ert varumärke,</li>
        <li>
          och har ni väl fått in inköparen på er e-handel ökar sannolikheten att
          de köper mer från er än en konkurrent
        </li>
      </ul>
      <h3>Ge inköparen en bättre användarupplevelse</h3>
      <p>
        Inköpssystem har avancerade användargränssnitt som inte gör skillnad på
        olika typer av produkter. De har inte heller lika mycket information om
        era produkter som er e-handel. Det är därför inte alltid lätt för en
        inköpare att hitta rätt produkt bland många tusentals produkter. Ofta
        saknas bra filterfunktioner och en bra sökfunktion. Ofta förstår inte
        inköpssystem vilka produkter som är varianter av varandra, vilka
        produkter som hör ihop i serier eller familjer. För tekniska produkter
        kan det också behövas guider som leder fram till rätt produkt.
      </p>
      <p>
        Er e-handel, å andra sidan, är anpassad för era produkter och gör det
        lätt att hitta rätt produkt - exempelvis via en kategoristruktur som är
        anpassad för just ert sortiment, en bra sökfunktion som söker på all
        produktinformation, pedagogisk uppställning av alla varianter av en
        produkt och filterfunktioner för att hitta rätt urval.
      </p>
      <p>
        Därtill har ni möjlighet att presentera rik och detaljerad
        produktinformation på ett helt annat sätt. Ni kan på ett pedagogiskt
        sätt presentera produktinformationen i olika fält, serier och varianter,
        med bilder, dokument och video. Ni kan också lyfta fram säljargument på
        ett sätt som är svårt att göra i ett inköpssystem.
      </p>
      <p>
        Med inköparen inne på er e-handel har ni också möjlighet att erbjuda
        smidig kontakt till era säljare och kundtjänst på ett helt annat sätt,
        exempelvis via chat.
      </p>
      <h3>Personaliserad prissättning</h3>
      <p>
        En annan fördel med att ta med inköparen till er e-handel är att ni har
        möjlighet att arbeta med personaliserad/kundunik, och kanske till och
        med dynamisk, prissättning och träffsäkra kampanjer. Man kan exempelvis
        utifrån kundens tidigare köpbeteende erbjuda speciella rabatter eller
        volympriser eller introducera inköparen till nya produkter i ert
        sortiment genom speciella kampanjer.
      </p>
      <h3>Hur skiljer sig PunchOut från EDI?</h3>
      <p>
        Med EDI (Electronic Data Interchange) kan företag skicka order,
        lagersaldon och fakturor till varandra elektroniskt, direkt från ett
        affärssystem till ett annat. EDI används flitigt inom B2B för att lägga
        order, ofta automatiserade orderflöden, exempelvis påfyllnadsorder
        enligt gällande avtal. PunchOut skiljer sig från EDI genom att ett
        PunchOut-flöde stöder inköparens mer manuella process att välja ut varor
        att köpa in. Sedan kan inköpssystemet i sin tur använda EDI för att
        lägga ordern elektroniskt.
      </p>
      <h3>Hur gör jag för att komma igång med PunchOut?</h3>
      <p>
        Har ni en e-handel som ni vill koppla in era kunder till behöver ni en
        integration från kundernas inköpssystem till er e-handelsplattform. Det
        sker genom att använda ett standardformat för integrationen, såsom cXML
        (commerce XML) eller OCI (Open Catalog Interface). Olika inköpssystem
        stöder ett eller flera olika format.
      </p>
      <p>
        Beroende på vilket e-handelssystem ni använder behövs ett tekniskt
        utvecklingsprojekt för att e-handelssystemet ska kunna stödja de olika
        format som era kunders olika inköpssystem använder. Till vanliga
        e-handelsplattformar såsom Litium, EpiServer, Magento och Shopify finns
        färdiga tredjeparts-tillägg som stödjer de vanligaste formaten, då blir
        integrationsprojekten små.
      </p>
      <p>
        När integrationen väl är på plats börjar arbetet med att rulla ut det
        till kunderna. Här gäller det att vara duktig på att lyfta fram värdet
        för kunden, det innebär trots allt lite arbete på kundens sida. Berätta
        om fördelarna för inköparna och varför inte ge en morot i form av
        speciella introduktionsrabbater?
      </p>
      <h3>Experten: viktigt att tänka på</h3>
      <div className="mb-2 text-18">
        <span>Jag frågade Sören Handlos, PunchOut-expert och co-founder till </span>
        <a href="https://shopspray.com/" rel="noreferrer" target="_blank">
          Shopspray
        </a>
        , vad man bör tänka på när man tittar på att börja med PunchOut:
      </div>
      <ol>
        <li>
          Välj en e-handelsplattform som har färdiga tillägg för att stödja
          PunchOut, att bygga det själv är dyrt och komplext
        </li>
        <li>
          Säkerställ att ni har full kommersiell kontroll över PunchOut-kanalen,
          en del marknadsplatser och tredjepartslösningar vill tränga sig in
          mellan er och era kunder
        </li>
        <li>
          Fokusera på inköparens vardag, i slutanändan är det UX som avgör hur
          framgångsrik er PunchOut-kanal blir
        </li>
      </ol>
    </BlogPostBody>
  );
}

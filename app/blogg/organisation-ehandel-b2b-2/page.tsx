import Image from "next/image";
import Link from "next/link";
import BlogPostBody from "../../../components/BlogPostBody";
import BlogImage1 from "../../../public/blogg/Organisation-ehandel-b2b-1.png";
import BlogImage2 from "../../../public/blogg/Organisation-ehandel-b2b-2.png";
import BlogImage3 from "../../../public/blogg/Organisation-ehandel-b2b-3.png";

export default function Home() {
  return (
    <BlogPostBody
      author="Henrik Lundin"
      title="Vilken organisation behövs för en B2B e-handel? Del 2."
    >
      <p>
        I den här bloggserien tittar vi på hur man bör organisera sig och vilka
        processer som behövs för en framgångsrik B2B e-handel. I
        <Link href="/blogg/organisation-ehandel-b2b/"> del 1 </Link>
        gick vi igenom de olika processer som man behöver och vad de innebär. Nu
        går vi vidare och konkretiserar vem som gör vad genom att titta på 3
        exempelorganisationer.
      </p>
      <p>
        I exemplen nedan har jag inte tagit med de funktioner man redan har,
        bara de som tillkommer eller får förändrat uppdrag när man går mot
        e-handel, exempelvis är IT inte med (trots att de får en mycket viktig
        roll med större tyngd på e-handel). Liten disclaimer: exemplen nedan är
        att ses som principskisser, alla bolag ser olika ut och det skiljer sig
        mycket mellan stora och små bolag.
      </p>
      <h3>Exempel 1: Direktsäljande B2B</h3>
      <p>
        Vårt första exempel är ett bolag som säljer verktyg via sin e-handel. De
        har inga mellanled utan säljer direkt till sina företagskunder. Affären
        är lik en konsumentehandel, det handlar om att driva trafik till
        e-handeln, få till en hög konverteringsgrad och ett högt ordervärde, en
        effektiv plock- och packprocess för små ordrar, minimera returer och få
        en hög grad av återkommande kunder. Man har några säljare som arbetar
        med stora konton i en liten säljorganisation som är uppdelad i distrikt
        och land. Små konton använder e-handeln och har inga egna säljare tills
        dess att man lyckas växa kunden till ett “stort konto”. Man har ett
        relativt stort sortiment, produkter importeras och lagras i ett
        egetdrivet centralt plocklager i Sverige alternativt levereras direkt
        till kund via dropshipping från grossist. Man levererar till Sverige,
        Norge, Finland och Danmark.
      </p>
      <p>
        Organisationen i ett direktsäljande B2B-företag med stark e-handel
        brukar se ut så här, där e-handelsteamet ligger under Commercial:
      </p>
      <div className="mb-8">
        <Image alt="Exempel 1" src={BlogImage1} />
      </div>
      <h3>Exempel 2: Tillverkande bolag med återförsäljare</h3>
      <p>
        I exempel 2 har vi ett bolag som tillverkar industrimaskiner med eget
        varumärke, där man vill sälja enklare produkter och reservdelar via
        e-handel direkt till slutkund, övrig försäljning har långa säljcykler
        och säljs via återförsäljare. Man har ett eget centralt lager och en
        stor serviceorganisation. Man vill ha en onlineportal för återförsäljare
        (“ÅF-portal” nedan) kopplad till e-handeln för att effektivisera
        försäljningen och få nöjdare återförsäljare.
      </p>
      <p>
        Organisationen i ett tillverkande bolag med återförsäljare som detta
        brukar se ut så här, där e-handelsteamet leds av en s.k. E-commerce
        Manager och ligger under Sälj och där Kundtjänst antingen ligger under
        Sälj eller Service:
      </p>
      <div className="mb-8">
        <Image alt="Exempel 2" src={BlogImage2} />
      </div>
      <h3>Exempel 3: Grossist B2B2C</h3>
      <p>
        I exempel 3 har vi ett företag som företräder ett antal
        konsumentvarumärken som säljs vidare till butiksled och e-handlare som
        slutligen säljer till konsument. Verksamheten handlar om försäljning
        till detaljhandeln och om att minska kostnaderna genom en hög grad av
        automatisering. Man har eget lager men vill också erbjuda leverans
        direkt till konsument via en dropshipping-tjänst.
      </p>
      <p>
        Organisationen i grossistbolag som detta brukar se ut så här, där
        e-handelsteamet leds av en s.k. E-commerce Manager och ligger under
        Sälj:
      </p>
      <div className="mb-8">
        <Image alt="Exempel 3" src={BlogImage3} />
      </div>
      <p>
        Avslutningsvis vill jag skicka ett stort tack till
        <a
          href="https://www.linkedin.com/in/johanssonrobert/"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          Robert Areno{" "}
        </a>
        för värdefull input. Har du synpunkter kring organisation för e-handel
        eller fler exempel, hör gärna av dig!
      </p>
    </BlogPostBody>
  );
}

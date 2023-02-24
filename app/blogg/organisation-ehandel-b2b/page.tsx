import Link from "next/link";
import BlogPostBody from "../../../components/BlogPostBody";

export default function Home() {
  return (
    <BlogPostBody
      author="Henrik Lundin"
      title="Vilken organisation behövs för att driva en B2B e-handel? Del 1."
    >
      <p>
        Först och främst, att införa en e-handelskanal involverar många delar av
        företaget, det är inte en egen organisatorisk silo. Tvärtom vill man
        använda de funktioner man redan har på plats och inte uppfinna hjulet på
        nytt. Sannolikt har man redan en fungerande ekonomifunktion, ett
        affärssystem, en kundtjänst, ett säljteam, ett marknadsteam etc. Att
        införa e-handel är “bara” en ny kanal, även om den kan ha stor betydelse
        och medföra nya strategiska vägval. Det “nya” man behöver är ett
        “e-handelsteam” och en förändrad “fulfillment”-funktion. Vi återkommer
        till vad de gör längre fram.
      </p>
      <p>
        Innan man börjar titta på att införa e-handel så bör man göra en enkel
        kartläggning av kundresan. Man behöver förstå, ur kundens perspektiv,
        hur denne vill agera med er i kundresans olika stadier. Gör man inte
        kundresan finns det stor risk att man bygger en organisation utifrån en
        felaktig föreställning om vad kunden vill ha, man bygger något utifrån
        hur det fungerar idag.
      </p>
      <p>
        Om man tittar på den organisation som man behöver bygga upp för B2B
        e-handel, utöver de funktioner man redan har, så brukar jag dela upp
        dessa i 10 organisatoriska hinkar:
      </p>
      <ol>
        <li>Skapa kännedom om varumärket</li>
        <li>PIM</li>
        <li>Lead Generation / driva trafik</li>
        <li>Konvertering</li>
        <li>Återaktivering</li>
        <li>Kundtjänst</li>
        <li>Fulfillment, leverans, lager, returer & reklamationer</li>
        <li>Prissättning och kampanjer</li>
        <li>Digitala servicefunktioner</li>
        <li>Vidareutveckling av sin e-handel</li>
      </ol>
      <p>
        Och så finns det två hinkar till som blir allt viktigare:
        bedrägerihantering och omvärldsbevakning.
      </p>
      <h3>1. Skapa kännedom om varumärket</h3>
      <p>
        Att arbeta med varumärkeskännedom är inte specifikt för e-handel, jag
        vill ändå lyfta fram det eftersom det är så viktigt, i synnerhet inom
        B2B-handel. Det är ibland långa köpcykler, som ofta börjar med att
        kunden behöver bli varse att den har ett problem eller en möjlighet
        (“awareness”-fasen i kundresan). Efter kunden fått upp ögonen för att
        något behöver göras (eller köpas) börjar denne söka efter information
        (“consideration”-fasen i kundresan). Under consideration-fasen vet vi
        att kännedom om befintliga leverantörer spelar in, kunden börjar ofta
        leta efter lösningar hos de leverantörer den redan känner till.
      </p>
      <p>
        Sannolikt har ni ett marknadsteam som redan arbetar med
        varumärkeskännedom, vilket de ska fortsätta med. Ett renodlat
        “e-handelsteam” arbetar sällan med bred varumärkesmarknadsföring utöver
        att digitala marknadsinsatser, exempelvis digitala annonser och
        innehållskampanjer (se “Content marketing” nedan), alltid innehåller ett
        varumärkesbudskap och därför alltid ska utformas utifrån marknadsteamets
        riktlinjer. Ett arbetssätt är därför att marknadsteamet tar fram
        konkreta riktlinjer som e-handelsteamet kan använda i sitt dagliga
        arbete.
      </p>
      <h3>2. PIM</h3>
      <p>
        PIM står för Product Information Management och handlar om att få ut
        information om sina produkter till rätt mottagare, i de kanaler man
        arbetar i, gärna med så mycket automation som möjligt. Vanligtvis
        arbetar man med PIM-processen i ett PIM-system och till viss del i sitt
        affärssystem.
      </p>
      <p>Värdet av att arbeta med PIM är att du:</p>
      <ul>
        <li>
          <strong>Säljer mer</strong>, det blir lättare för blivande kunder att
          hitta fram till dina produkter, en kundresa börjar i många fall med en
          produktsökning online. För återkommande kunder är det viktigt att
          snabbt kunna söka fram relaterade produkter, exempelvis reservdelar.
        </li>
        <li>
          <strong>Får nöjdare kunder</strong>, att snabbt hitta detaljerad
          produktinformation är ett av de viktigaste användarfallen för nöjdare
          kunder inom B2B.
        </li>
        <li>
          <strong>Får effektivare interna processer</strong> med rätt verktyg
          och arbetsmetoder, viktigt att kunna ha all produktinformation på ett
          och samma ställe, man slipper uppdatera på flera ställen och undviker
          motstridiga dubbletter. Utan en effektiv process är det också snudd på
          omöjligt att ha en “unified commerce”-strategi, att interagera med
          kunden i flera samverkande kanaler med konsekvent produktinformation
          överallt.
        </li>
      </ul>
      <p>
        Jag kommer fokusera på PIM i en senare bloggpost men kortfattat brukar
        man beskriva PIM-processen i tre steg:
      </p>
      <ol>
        <li>Berika (engelska: &quot;enrich&quot;)</li>
        <li>Planera (engelska: &quot;plan&quot;)</li>
        <li>Publicera (engelska: &quot;publish&quot;)</li>
      </ol>
      <p>
        I berikningssteget samlar man all information om produkten på ett och
        samma ställe, fakta, texter, bilder, filmer, osv (det kallas attribut
        eller fält). Man kopplar också ihop produkter med varandra genom
        relationer mellan produkter, exempelvis produkt A är ett tillbehör till
        produkt B, produkt C har utgått och har ersatts av produkt D osv. Man
        översätter de attribut som finns på flera språk och slutligen anger man
        vilka produkter som är varianter av samma “basprodukt”.
      </p>
      <p>
        I planeringssteget planerar man vilka produkter som ska finnas i vilka
        sortiment, kategorier, språk och marknader. Produktvariant A ska finnas
        i det norska sortimentet men inte i det svenska, produkt C ligger i
        kategorin “hyllor” i möbelsortimentet osv.
      </p>
      <p>
        I publiceringssteget publiceras produktinformationen till rätt kanal, på
        rätt språk och till rätt målgrupp. Exempelvis kanske all information
        publiceras på er globala hemsida, men bara viss information skickas till
        er inköpsportal, bara det norska sortimentet till den norska appen osv.
      </p>
      <p>
        Det är viktigt att försöka automatisera processen så mycket som möjligt
        med hjälp av ett PIM-system, även med ett litet sortiment och få kanaler
        blir det lätt övermäktigt om man försöker hantera PIM-processen
        manuellt.
      </p>
      <p>
        Inledningsvis brukar PIM-processen ägas av marknadsteamet, med input och
        information från e-handelsteamet, inköp och produktutveckling.
        Alternativt kan PIM-processen ägas av inköp vilket är vanligt hos mogna
        e-handlare.
      </p>
      <h3>3. Lead Generation / driva trafik</h3>
      <p>
        I den här hinken lägger jag digitala processer som syftar till att skapa
        leads i en bred bemärkelse, allt från att driva trafik till ens
        webbplats till att över en längre tid göra sig relevant för en sökande
        kund och leda den vidare i marknadstratten.
      </p>
      <p>
        Hur företag genererar nya leads ser olika ut, det kan vara traditionella
        metoder såsom telemarketing, mässor, kontaktnätverk mm men de som ett
        marknads- eller e-handelsteam arbetar med är:
      </p>
      <ul>
        <li>
          “Lead generation”: digital leadsgenerering är huvudprocessen som
          syftar till hur man genererar leads genom digitala verktyg.
        </li>
        <li>
          “Inbound Marketing”: Inbound Marketing syftar till att attrahera
          kunden att komma till dig, på kundens villkor, när den är redo i sin
          kundresa. Ofta görs det genom relevant innehåll som ger kunden värde
          genom Content Marketing, eller personaliserade annonser som kunden
          hittar då denne är ute och söker efter lösningar.
        </li>
        <li>
          “Content Marketing”: att genom relevant innehåll nå en blivande kund
          vid exakt rätt tillfälle i dess kundresa, ofta med syfte att leda den
          till ens webbplats eller andra kanaler. Content Marketing går hand i
          hand med Inbound Marketing. Många jobbar med en extern contentbyrå för
          att ta fram innehåll, exempelvis bloggposter, guider och whitepapers.
        </li>
        <li>
          “Driva trafik”: metoder för att driva mer trafik, bl.a. &quot;SEM&quot; (Search
          Engine Marketing) som innefattar “SEO” för att optimera din webbplats
          för sökmotorer, så att kunder kan hitta dig när de söker efter
          lösningar eller produkter, och “SEA” för annonsering i samband med att
          kunder söker i sökmotorer. För vissa kan även “Retargeting” vara
          intressant, att visa upp annonser på det besökaren tittat på hos dig
          på andra webbplatser.
        </li>
      </ul>
      <h3>4. Konvertering</h3>
      <p>
        Att konvertera betyder i e-handelssammanhang att få ett lead till att
        köpa, ett avslut. Beroende på hur man säljer kan det vara en enkel rak
        säljtratt där kunder kan lägga saker i kundvagnen och köpa direkt, eller
        långa säljcykler med fysiska möten, offerter osv.
      </p>
      <p>
        Arbetar man med den enklare formen, besök på ens e-handel som ska
        konverteras till order, brukar man arbeta med följande uppgifter:
      </p>
      <ul>
        <li>
          Testa, mäta och analysera: att testa, mäta och förstå hur man
          presterar och var man tappar i konvertering är A och O inom e-handel.
          Att testa och mäta konverteringsgraden ligger i blodet hos alla
          duktiga e-handlare. Utan att testa och mäta kan man inte veta säkert.
        </li>
        <li>Kampanjer: kampanjer för att öka konverteringsgraden.</li>
        <li>
          Öka snittordervärdet: man arbetar hela tiden med metoder för att öka
          ordervärdet.
        </li>
        <li>
          De viktigaste användarfallen: man arbetar kontinuerligt med att
          optimera ens viktigaste användarfall, hur besökare kommer in till
          webbplatsen, landningssidor, sök, navigation, hur man vill betala,
          leveransalternativ osv.
        </li>
        <p>
          Arbetar man istället med långa säljcykler brukar en konvertering ofta
          vara en möjlighet till kontakt, att besökaren vill ha kontakt eller
          delar med sig av sina kontaktuppgifter i utbyte mot något värdefullt.
          Då är det viktigt att ha en tydlig väg på webbplatsen med bra Call to
          Actions så att kunden alltid vägleds vidare fram till kontakt.
        </p>
        <h3>5. Återaktivering</h3>
        <p>
          Att arbeta med att få återkommande kunder, återaktivering (“retention”
          på engelska), är en viktig process. Det är mycket billigare att få en
          befintlig kund att köpa än att rekrytera nya kunder. För e-handlare är
          andel återkommande kunder och dess köpbeteende viktiga nyckeltal.
        </p>
        <p>
          Man arbetar med återaktivering på olika sätt beroende på hur man
          säljer, säljer man via e-handel arbetar man med automatiserad
          kommunikation och erbjudanden, exempelvis uppföljningserbjudanden,
          relevant innehåll, skriva en recension eller produktrekommendationer
          via e-post. Arbetar man med mer komplex försäljning i större affärer
          ingår det som en naturlig del av KAM-processen.
        </p>
        <p>
          I förlängningen vill man att återkommande kunder, lojala kunder, också
          ska bli ens ambassadörer. Även om lojalitetsprogram inte är lika
          vanliga inom B2B är målet detsamma, kunden ska bli så nöjd att den
          rekryterar nya kunder åt dig.
        </p>
        <h3>6. Kundtjänst</h3>
        <p>
          En modern kundtjänst arbetar i flera kanaler och ingår vanligtvis inte
          i ett e-handelsteam. Däremot kan kundtjänst använda sig av digitala
          verktyg såsom webbformulär och chatt och om det är önskvärt styra
          kommunikationen med kunder så att den blir mer effektiv och mindre
          manuell genom digitala verktyg.
        </p>
        <p>
          Det man bör ha i åtanke för B2B-handel är att kundtjänst i många fall
          också lägger order, de är “säljare”. Vissa kunder vill samla
          information online men i slutändan ändå prata med en person, antingen
          sälj eller kundtjänst.
        </p>
        <h3>7. Fulfillment, leverans, lager, returer & reklamationer</h3>
        <p>
          Fulfillment (eller “Order Fulfillment”) är processen för att expediera
          en order, vanligtvis menar man lagerplock, packa varor, leverans,
          installation och eventuellt uppföljning efter leverans.
        </p>
        <p>
          Arbetar man med tullager brukar hanterar Fulfillment-teamet även
          hantera administration kring detta.
        </p>
        <p>
          Om man inte vill ha eget lager kan man använda en
          tredjepartslogistik-lösning (“3PL”) som hanterar hela
          Fulfillment-processen och returhantering.
        </p>
        <p>
          Returer, byten och reklamationer hör nära ihop med Fulfillment. Oftast
          skickas returer och reklamationer direkt till lagret där det går till
          en s.k. “returstation”. I returstationen verifierar man att returen är
          giltig och återför produkterna till lagret. 3PL-lager brukar
          vanligtvis även hantera returer.
        </p>
        <h3>8. Prissättning och kampanjer</h3>
        <p>
          Ett område som många förbiser när e-handeln tar fart är att man
          behöver jobba mer och “snabbare” med priser och kampanjer. Man är van
          att arbeta löpande med att förhandla “manuellt” om rabatter och avtal,
          men i övrigt är priser och kampanjer statiska.
        </p>
        <p>
          En lärdom är att B2B-företag som ökar sin e-handel lägger mer tid och
          kraft på prishantering och kampanjer. Varför? Jo, man ser att man kan
          öka sin försäljning. E-handeln medför nya möjligheter att på ett
          effektivt sätt arbeta med priser och kampanjer på mer “dynamiska”
          sätt. Man kan erbjuda “personaliserade”/kundunika priser och
          erbjudanden, exempelvis plocka ihop paket av produkter, erbjuda
          rabattrappor, automatiska rabatter på nya varor i sortimentet osv. Det
          ger också säljare möjlighet att själva konstruera paket, “smårabatter”
          och erbjudanden för sina egna kunder som skulle ta för mycket kraft
          och tid om man alltid behövde en personlig säljdialog. Och sist men
          inte minst, man jobbar med mycket fler kampanjer än tidigare, istället
          för några kampanjer per termin riktade till alla kunder kan man arbeta
          med 10 gånger fler kampanjer, riktade till olika kundsegment. Man får
          bättre uppföljning på kampanjer och motiveras då att fortsätta med de
          typer av kampanjer som fungerar.
        </p>
        <p>
          Mer dynamisk prissättning ställer ofta nya krav på affärssystemet och
          ger inledningsvis högre belastning på kundtjänst. Se därför dynamisk
          prissättning som en resa i flera steg, det är svårt att gå hela vägen
          i en vända.
        </p>
        <h3>9. Digitala servicefunktioner</h3>
        <p>
          Digitala servicefunktioner och andra tjänster är viktiga incitament
          för kunder och återförsäljare att börja köpa digitalt istället för att
          ringa in sina order. Ofta har man en portal kopplad till e-handeln med
          digitala tjänster som exempelvis produktkonfigurator, följa upp status
          på order, skapa offert till slutkund mm. Undersökningar visar att bra
          digitala servicefunktioner är mycket viktiga för att öka försäljningen
          mot befintliga kunder och öka kundnöjdheten.
        </p>
        <h3>10. Vidareutveckling av sin e-handel</h3>
        <p>
          Att införa e-handel är inget engångsprojekt, faktum är att man får
          bäst resultat om man arbetar i flera små iterationer istället för
          stora projekt. Så är det, ni kommer alltid att jobba med
          vidareutveckling av er e-handel, både gällande innehåll och teknik.
          Man pratar om att man har en “backlog”, en prioriterad lista av saker
          att göra.
        </p>
        <p>
          Processen för vidareutveckling ägs av e-handelsteamet, de är
          systemägare/produktägare till e-handelsplattformen. Ibland arbetar man
          med egna utvecklingsteam inom e-handelsteamet, eller så har man en
          extern leverantör eller så är det IT-organisationen som driver
          projekten.
        </p>
        <h3>11. Omvärldsbevakning</h3>
        <p>
          Digital handel utvecklas i en oerhörd takt, trender som vi ser på
          horisonten kan snabbt bli verklighet. Det kan handla om
          marknadsplatser för B2B-handel som öppnar upp helt nya möjligheter att
          gå in på nya marknader, nya leveransalternativ eller om
          klimatperspektivet som redan gjort ett stort avtryck inom B2C-handeln.
          Om du vill veta mer om aktuella trender, se webinar här där vi
          diskuterar viktiga trender som kommer att påverka B2B-handeln.
        </p>
        <p>
          Det handlar också om vad konkurrenterna gör, har en konkurrent ändrat
          taktik eller infört en ny tjänst eller e-handel kan det på kort tid
          påverka er affär.
        </p>
        <p>
          Därför behöver ni ha en viss kontinuerlig omvärldsbevakning, den
          behöver inte vara omfattande, att samla kunskap några timmar i månaden
          räcker. Både marknads- och e-handelsteamet bör arbeta med
          omvärldsbevakning.
        </p>
        <h3>12. Bedrägerier</h3>
        <p>
          I vissa verksamheter behöver man arbeta med bedrägerier (engelska:
          “Fraud”). Bedrägeriarbete handlar dels om att arbeta förebyggande med
          val av leverantörer och funktioner i e-handelsplattformen, dels om
          dagligt arbete med rutiner för, och manuellt arbete med, misstänkta
          (s.k. “flaggade”) order. Arbetet med misstänkta order hanteras
          vanligtvis av ekonomifunktionen eftersom det ligger nära andra
          ekonomiuppgifter.
        </p>
        <h3>Vem gör vad?</h3>
        <p>
          Nu när vi gått igenom de hinkar och processer vi behöver för att driva
          en e-handel kan det lätt kännas övermäktigt, vem gör egentligen vad? I{" "}
          <Link href="/blogg/organisation-ehandel-b2b-2/"> del 2</Link>{" "}
          går vi vidare och konkretiserar genom att rita upp 3 olika
          typorganisationer med vilka team som äger vilka processer.
        </p>
      </ul>
    </BlogPostBody>
  );
}

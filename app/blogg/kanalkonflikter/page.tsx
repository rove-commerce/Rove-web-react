import Image from "next/image";
import Link from "next/link";
import BlogPostBody from "../../../components/BlogPostBody";
import BlogImage from "../../../public/blogg/AndréBusiness.jpg";

export default function Home() {
  return (
    <BlogPostBody
      author="Henrik Lundin"
      title="Sälja direkt och kanalkonflikter"
    >
      <div className="tablet:w-1/2 float-right">
        <Image alt="Andŕe" className="ml-4 mb-8" src={BlogImage} />
      </div>
      <p>
        Kanalkonflikter är ett av de vanligaste skälen till att B2B-företag
        tvekar med att börja med e-handel. Man är orolig för hur
        återförsäljarledet kommer att reagera. Å andra sidan finns stora
        fördelar med att ha större kontroll, snabbhet och insikt i hela
        försäljningsprocessen, både för tillverkaren och för slutkunden.
      </p>
      <p>
        I den här bloggposten kommer vi att diskutera kanalkonflikter, och till
        min hjälp har jag André Sandin som arbetar som Service Manager Digital
        Sales & Marketing på Addtech. Addtech är en industrikoncernen som består
        av drygt 130 bolag varav många är verkstads- och teknikföretag. André
        har under många år arbetat med att hjälpa Addtech-bolag till en mer
        digital sälj- och marknadsprocess och har lång erfarenhet av utmaningar
        med kanalkonflikter.
      </p>
      <p>
        Om vi börjar med att titta på varför man skulle vilja börja sälja direkt
        via e-handel och inte bara hålla sig till återförsäljarledet:
      </p>
      <h3>1. Att köpa direkt via e-handel kan vara bättre för slutkunden</h3>
      <p>
        Att tvinga slutkunden att köpa via återförsäljare är inte alltid bäst
        för slutkunden. Kundens köpresa börjar ofta med en sökning på en
        sökmotor, varpå man kommer direkt till tillverkaren där man läser på och
        slutligen landar i ett köpbeslut. Att då inte kunna genomföra köpet utan
        “tvingas” gå till en återförsäljare och leta fram produkten där upplevs
        som omständigt och man riskerar att tappa försäljning. Är det smidigare
        att köpa hos en konkurrent direkt kanske man gör det.
      </p>
      <h3>2. Man får en inblick i hela säljprocessen</h3>
      <p>
        Många tillverkare upplever att de får bättre förståelse för
        säljprocessen om de också säljer direkt, istället för att vara
        “utlämnade” till återförsäljarnas ibland ganska knappa återrapportering.
        Det kan handla om nyckeltal, vad som konverterar mot vilken målgrupp,
        vilken produktinformation som krävs, frågor som kommer från kunden då
        den ska ta ett köpbeslut osv. Genom att sälja direkt får tillverkaren
        förstahandsinformation, kunskap som sedan kan återföras till
        återförsäljare för att de i sin tur också ska lyckas bättre.
      </p>
      <h3>3. Lyfta fram varumärket</h3>
      <p>
        Genom att själv ha en direktkanal till slutkund kan man som tillverkare
        bättre lyfta fram sitt varumärke. Säljer man via återförsäljare är man
        beroende av hur mycket kraft återförsäljaren lägger på att lyfta fram
        ditt varumärke, och om återförsäljaren också säljer dina konkurrenters
        produkter är det ännu svårare.
      </p>
      <h3>4. Vissa produkter passar bättre att sälja direkt</h3>
      <p>
        Vissa produkter, exempelvis reservdelar, passar ibland dåligt att sälja
        via återförsäljare. Det kan exempelvis bero på att det är sällanköp som
        finns i många olika varianter vilket gör det svårt för återförsäljare
        att lagra. Återförsäljarna skulle ändå använda sig av dropshipping
        direkt från tillverkaren, vilket kan ge längre ledtider och högre
        kostnader för alla parter - varför inte då sälja direkt till slutkunden?
      </p>
      <h3>Frågor och svar med André Sandin</h3>
      <p>
        <i>
          - Om vi börjar med att zooma ut lite och titta på e-handelstrender i
          stort. Jag kan se att sälja direkt och “komplettera” sina
          återförsäljarled numera är helt vedertaget inom B2C-handel och något
          som kommer på bred front även inom B2B, hur ser det ut inom
          Addtech-koncernen?{" "}
        </i>
        <br />- Jag har inte tillräcklig inblick i alla våra dotterbolag för att
        kunna uttala mig för alla, men för de Addtech-bolag jag känner bättre
        och som säljer via grossister är detta är en väldigt känslig fråga. Man
        har en lång upparbetad relation med sina grossister och man vill inte
        riskera den relationen med att börja sälja hela eller delar av
        sortimentet själv. Våra bolag skulle inte ha möjlighet att skala sin
        affär utan grossistledet så här gäller det att hantera denna fråga
        varsamt. Just nu känns det inte som att detta är aktuellt, men i och med
        att marknaden förändras är detta en möjlighet man kontinuerligt
        undersöker.
      </p>
      <p></p>
      <p>
        <i>
          {" "}
          - Upplever du att kanalkonflikter är ett hinder för bolagen inom
          Addtech att börja med e-handel?{" "}
        </i>
        <br />- Ja, för de som har en större del av sin försäljning via grossist
        är detta definitivt ett hinder.
      </p>
      <p></p>
      <p>
        <i>
          - Om vi pratar lite om strategier som företag använder för att prova
          på, komma igång med, att sälja direkt, exempelvis att börja med
          reservdelar, eller ett nytt sortiment, vad har du sett inom Addtech?{" "}
        </i>
        <br />- De relativt få Addtech-bolag som erbjuder en e-handelslösning
        gör det för enklare produkter, dock inte bara reservdelar utan för
        större delen av sina sortiment. Våra bolag arbetar till stor del med
        värdeadderande/kundanpassade lösningar baserade på deras huvudmäns
        sortiment och här är tröskeln större att sälja det online. Dels krävs
        det högre kompetens av kunden samt att det krävs stora investeringar på
        olika typer av konfiguratorer. Min egen bild är dock att reservdelar
        eller enklare produkter är helt rätt ände att börja med. Gör man det
        kommer man även att kunna få en leadsgenerering för mer komplex
        försäljning.
      </p>
      <p></p>
      <p>
        <i>
          - Har du något exempel på bolag som lyckats med att börja sälja direkt
          och kunna avvärja kanalkonflikter, kanske till och med fått med sig
          återförsäljarna genom att påvisa att det gynnar alla parter?
        </i>
        <br />- Nej, tyvärr inte. De få bolag som erbjuder en e-handelslösning
        har ingen kanalkonflikt med grossister utan äger säljrättigheterna för
        leverantörens produkter på den marknad där de erbjuds.
      </p>
      <p>
        <i>
          - Intåget av marknadsplatser för B2B-handel, exempelvis Amazon, ger en
          ny dimension till kanalkonflikter, tror du att det kommer påskynda
          acceptansen att sälja direkt? Att alla förstår att man behöver sälja
          via amazon och på sätt blir det tillåtet att sälja direkt även på
          andra sätt?
        </i>
        <br />- Absolut ja, för de bolag som har en större andel av sin
        försäljning baserad på mer eller mindre standardprodukter kommer
        marknadsplatser som Amazon/Alibaba etc. att ha en enorm påverkan på
        sikt. Det kommer självfallet påverka de som har en stor försäljning via
        grossister också och kommer att göra det möjligt för dessa bolag att
        sälja direkt. Risken för att stöta sig med grossistledet kommer att
        minska i takt med att huvudmännens produkter kommer kunna köpas via
        andra kanaler. Jag tror att det kommer att avdramatisera kanalkonflikten
        över tid.
      </p>
      <p>
        <i>
          - Utifrån din erfarenhet, vad ser du för fördelar med att sälja direkt
          för B2B-företag?
        </i>
        - Jag ser många fördelar med att sälja direkt:
      </p>
      <ul>
        <li>
          Ta hand om hela kundresan och få en närmare & bättre relation med
          slutkunden.
        </li>
        <li>Kunna erbjuda en bättre kundservice och förenkla köpresan.</li>
        <li>
          Få bättre inblick i kundens utmaningar, invändningar och vanliga
          frågor. Denna information kan användas för att förbättra sitt
          erbjudande mot kunderna.
        </li>
        <li>
          Minimera risken att kunden väljer en konkurrents produkt/lösning.
          Grossisterna arbetar ju med många leverantörers sortiment och du har
          inte full kontroll hur de behandlar och pratar för ditt erbjudande.
        </li>
        <li>
          Möjlighet till merförsäljning när kunderna ser hela ditt sortiment, om
          du inte säljer hela ditt erbjudande via grossistledet.
        </li>
      </ul>
      <p>
        <i>
          - Om du får sia lite om framtiden, hur tror du det kommer se ut om 5
          år, kommer man att ha kommit förbi kanalkonflikter då?
        </i>
        - Ja, förutsatt att någon marknadsplats på allvar har blivit en aktör på
        den marknad man verkar, kommer det i vart fall leda till att
        kanalkonflikterna minskar. Om det kommer innebära att kanalkonflikter
        helt försvunnit vågar jag dock inte sia om.
      </p>
      <p>
        Stort tack till André för en värdefull reality-check! Det ska bli
        spännande att följa utvecklingen. Har du något bra exempel på företag
        som lyckats kombinera återförsäljare/grossist-led med direktförsäljning,
        hör gärna av dig!
      </p>
    </BlogPostBody>
  );
}

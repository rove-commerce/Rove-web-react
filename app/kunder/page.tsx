import PageHeader from "../../components/PageHeader";
import ExpandableText from "../../components/ExpandableText";

export default function Home() {
  return (
    <>
      <PageHeader>Kunder</PageHeader>
      <div className="bg-white py-20">
        <div className="wrapper">
          <div className="inner-wrapper">
            <div className="wysiwyg" style={{ maxWidth: "687px" }}>
              <p className="preamble">
                Rove riktar sig till B2B- och B2B2C-företag, från tillverkande
                industri till konsumentvarumärken som säljer via återförsäljare.
              </p>
              <p className="preamble">
                Digital B2B-handel har många likheter med konsumenthandel med
                skiljer sig på några viktiga områden, målgruppen är
                beslutsfattare hos företag, kundresan är annorlunda, man har
                oftast komplexare produkter, flera försäljningsled, fler och
                komplexare pris-/avtalsupplägg samt är organiserade på ett
                annorlunda sätt jämfört med konsumenthandlare.
              </p>

              {/* Tillverkande bolag och varumärken */}
              <ExpandableText title="Tillverkande bolag och varumärken">
                <p>
                  Varumärken och tillverkande bolag B2B och B2B2C (B2B2C:
                  försäljning till konsument via återförsäljare) har stora
                  möjligheter att utvecklas och vinna konkurrensfördelar med
                  digitala verktyg för försäljning och marknadsföring. Bolagets
                  produkter behöver berikas och presenteras på ett sätt som gör
                  de lätta att hitta i de kanaler där kunderna finns,
                  återförsäljare/grossister och kunder behöver få rätt service
                  online för att öka lojaliteten och man behöver arbeta med
                  leadsgenerering på rätt sätt med fokus på inbound marketing så
                  att kundprospekt hittar till er vid rätt tillfälle.
                </p>
                <p>
                  Tillverkande bolag är också varumärken som behöver lyftas fram
                  och stärkas på rätt sätt i rätt kanal.
                </p>
              </ExpandableText>

              {/* Grossister och distributörer */}
              <ExpandableText title="Grossister och distributörer">
                <p>
                  För grossister och distributörer som vidaresäljer och förädlar
                  produkter finns stora möjligheter att effektivisera sin
                  verksamhet och vinna nya kunder genom en effektiv PIM-process,
                  erbjuda service online och bygga intresse kring de varumärken
                  man arbetar med.
                </p>
                <p>
                  Grossist- och distributörsverksamheter har sällan stora
                  marknadsteam utan behöver enkla effektiva processer och system
                  som kan hanteras av ett litet team. Man börjar ofta med att
                  titta på att införa en effektiv PIM-process där man med hög
                  grad av automatik kan försörja nästa led med rik
                  produktinformation. Ett nästa steg kan vara att se hur
                  e-handel kan effektivisera olika aspekter av försäljningen.
                  För att skapa ytt samt vilka serviceverktyg kunderna
                  efterfrågar och om de går att digitalisera.
                </p>
                <p>
                  För de grossister och distributörer som arbetar aktivt med att
                  rekrytera nya kunder behöver man också arbeta med
                  leadsgenerering på rätt sätt med fokus på inbound marketing så
                  att kundprospekt hittar till er vid rätt tillfälle.
                </p>
              </ExpandableText>

              {/* B2B2C */}
              <ExpandableText title="B2B2C">
                <p>
                  Företag med konsumentprodukter som säljs via återförsäljarled
                  står inför många utmaningar när man behöver kommunicera både
                  till slutkonsumenter och återförsäljarled, i en allt mer
                  digital värld med ett brett spektra av kanaler. Men man har
                  också stora möjligheter att vinna konkurrensfördelar genom ett
                  effektivt arbetssätt med moderna verktyg och processer för
                  e-handel, PIM, digital marknadsföring och service online.
                </p>
              </ExpandableText>

              {/* Direktsäljande B2B */}
              <ExpandableText title="Direktsäljande B2B">
                <p>
                  Företag som säljer enklare produkter direkt till andra företag
                  har många likheter med konsumentehandlare, man behöver bli
                  duktiga på e-handel, PIM och många områden inom digital
                  marknadsföring, bl.a. inbound marketing, SEO/SEM och
                  kanalstrategi. Man behöver också bygga en kultur av att
                  ständigt testa, mäta och ha total kontroll över sina KPI:er
                  eftersom e-handel ändrar karaktär så ofta.
                </p>
              </ExpandableText>

              {/* Mjukvarubolag / SaaS */}
              <ExpandableText title="Mjukvarubolag / SaaS">
                <p>
                  Mjukvarubolag och SaaS-tjänster riktade till företag behöver
                  skalbarhet i hela verksamheten och en stark marknadsfunktion
                  som genererar leads till sälj, ofta med fokus på inbound
                  marketing via content marketing och SEM.
                </p>
              </ExpandableText>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import PageHeader from "../../../components/PageHeader";

export const metadata: Metadata = {
  title: "Projektledare | Jobb",
  description:
    "Bli en Rover - Litium, e-handel, PIM, MarTech, digital marknadsföring.",
};

export default function Home() {
  return (
    <>
      <PageHeader>Projektledare/Verksamhetskonsult</PageHeader>
      <div className="bg-white py-20">
        <div className="wrapper">
          <div className="inner-wrapper">
            <div className="wysiwyg" style={{ maxWidth: "687px" }}>
              <p>
                Vi är ett nystartat konsultbolag med kontor vid Slussen i
                Stokcholm, specialiserade på att erbjuda skräddarsydda
                e-handelslösningar. I takt med att vi växer söker vi nu en
                erfaren Projektledare/Verksamhetsutvecklare som brinner för att
                leda projekt, utveckla affärer och skapa värde för våra kunder.
              </p>
              <p>
                Fundamentet i Rove utgörs av en lärande, omtänksam och ambitiös
                företagskultur - det är våra viktigaste värden som vi bygger
                företaget på. Vi vill ha en kultur av tillit med stort eget
                ansvar där vi inte detaljstyr varandra, med tydliga mål och
                mandat som uppmanar till egna initiativ och bra beslut. Vi vill
                ha rak kommunikation med positiv feedback för att hjälpa
                varandra att utvecklas.
              </p>
              <p>
                Ta chansen att komma in tidigt i ett bolag med stora visioner!
              </p>
              <h3>Om rollen</h3>
              <p>
                Som Projektledare/Verksamhetsutvecklare hos oss kommer du att:
              </p>
              <ul>
                <li>
                  Leda projekt för att utveckla och implementera
                  e-handelslösningar
                </li>
                <li>
                  Arbeta nära kunder för att definiera krav, skapa projektplaner
                  och säkerställa att lösningar levereras framgångsrik
                </li>
                <li>
                  Använda din kunskap och erfarenhet för att vägleda team och
                  kunder genom framförallt agila metoder
                </li>
                <li>
                  Hantera kundförväntningar genom utmärkt kommunikation och
                  genom att vara lyhörd för deras behov
                </li>
              </ul>
              <h3>Vi ser gärna att du</h3>
              <ul>
                <li>
                  Har minst 3 års relevant erfarenhet inom e-handel, antingen
                  som konsult eller från kundsidan
                </li>
                <li>
                  Har utmärkta ledaregenskaper och kommunikationsfärdigheter
                </li>
                <li>
                  Är skicklig på att navigera både i strategiska och operativa
                  frågor och har en naturlig förmåga att hantera och överträffa
                  kundförväntningar
                </li>
                <li>
                  Uttrycker dig väl i tal och skrift på svenska och engelska
                </li>
              </ul>
              <h3>Du får också gärna ha</h3>
              <ul>
                <li>
                  Ha erfarenhet av att leda både vattenfall- och agila projek
                </li>
              </ul>
              <h3>Vi erbjuder</h3>
              <ul>
                <li>Flexibla arbetstider och möjlighet till distansarbete</li>
                <li>Vinstdelningsprogram</li>
                <li>Sjuk- och sjukvårdsförsäkring</li>
                <li>Pensionsförsäkring</li>
                <li>Friskvårdsbidrag på 5 000 SEK per år</li>
                <li>
                  Ett nära och stödjande team i en lärande och ambitiös kultur
                </li>
              </ul>
              <h3>Ansökningsprocess</h3>
              <p>
                Vi värderar personliga möten och inbjuder dig därför att
                kontakta oss för en lunch där vi kan prata mer om hur du kan
                bidra till vårt team.
              </p>
              <h3>Placering</h3>
              <p>
                Vårt kontor ligger i moderna lokaler vid Slussen i Stockholm,
                med flexibilitet för distansarbete. Är du redo att ta nästa steg
                i din karriär och leda spännande e-handelsprojekt? Kontakta oss
                idag för att boka en lunch och diskutera dina möjligheter hos
                oss!
              </p>
              <p>Varmt välkommen med din ansökan till jobb@rove.se!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

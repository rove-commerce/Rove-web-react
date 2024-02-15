import type { Metadata } from "next";
import PageHeader from "../../../components/PageHeader";

export const metadata: Metadata = {
  title: "Fullstack-utvecklare | Jobb",
  description:
    "Bli en Rover - Litium, e-handel, PIM, MarTech, digital marknadsföring.",
};

export default function Home() {
  return (
    <>
      <PageHeader>Backend/Fullstackutvecklare</PageHeader>
      <div className="bg-white py-20">
        <div className="wrapper">
          <div className="inner-wrapper">
            <div className="wysiwyg" style={{ maxWidth: "687px" }}>
              <p>
                Är du en passionerad Backend-/Fullstackutvecklare med 3-6 års
                erfarenhet som är redo för nästa steg i din karriär? Vi är ett
                nystartat och snabbväxande konsultbolag med kontor vid Slussen i
                Stockholm, som specialiserar oss på att hjälpa våra kunder att
                utveckla sin e-handelspotential.
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
                Som Backend-/Fullstackutvecklare hos oss kommer du att arbeta i
                team tillsammans med projektledare, verksamhetskonsulter,
                arkitekter och andra utvecklare. Du kommer att vara en del av
                ett eller flera projekt där samarbete, kvalitet och innovation
                är nyckeln till framgång.
              </p>
              <h3>Vi ser gärna att du</h3>
              <ul>
                <li>Har 3-5 års erfarenhet av programutveckling</li>
                <li>Har starka kunskaper i C# och .NET</li>
                <li>
                  Har erfarenhet av webbutveckling (inom .Net) och integrationer
                  mellan webb och andra system
                </li>
                <li>
                  Har vana i att jobba med CD/CI pipelines, exempelvis Azure
                  DevOps
                </li>
                <li>
                  Uttrycker dig väl i tal och skrift på svenska och engelska
                </li>
              </ul>
              <h3>Du får också gärna ha</h3>
              <ul>
                <li>
                  Ha erfarenhet av e-handelsplattformar i allmänhet och/eller
                  Litium i synnerhet
                </li>
                <li>
                  Ha erfarenhet av frontend-utveckling i MVC, React, Tailwind
                  CSS och Foundation by Zurb
                </li>
                <li>
                  Ha erfarenhet av testramverk, exempelvis xUnit eller NUnit
                </li>
                <li>
                  Ha erfarenhet av att arbeta med Docker och Elasticsearch
                </li>
                <li>Ha erfarenhet av SQL</li>
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
                Vi värdesätter personliga möten och inbjuder dig därför att
                kontakta oss för en lunch där vi kan prata mer om möjligheterna.
              </p>
              <h3>Placering</h3>
              <p>
                Vårt kontor ligger i moderna lokaler vid Slussen i Stockholm,
                med flexibilitet för distansarbete. Är du redo att växa
                tillsammans med oss och hjälpa våra kunder att lyckas med sina
                e-handelslösningar? Kontakta oss idag för att boka in en lunch
                och diskutera hur du kan bli en del av vårt team!
              </p>
              <p>Varmt välkommen med din ansökan till jobb@rove.se!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

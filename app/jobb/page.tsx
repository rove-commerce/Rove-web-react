import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReadLink from "../../components/ReadLink";
import ContactForm from "../../components/ContactForm";
import PageHeader from "../../components/PageHeader";
import OmtankeLogo from "../../public/LogoOmtanke.png";
import AmbitionLogo from "../../public/LogoAmbition.png";
import LearningLogo from "../../public/LogoLearning.png";

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
              <h3>Bli en del av vårt team, just nu söker vi</h3>
            </div>
            <div className="inline-flex mt-8 flex-col laptop:flex-row">
              <Link
                href="/jobb/fullstack-utvecklare/"
                className="btn-blue inline-block font-medium mt-4 laptop:mt-0 laptop:ml-4"
              >
                Fullstack/Backend-utvecklare
              </Link>
              <Link
                href="/jobb/projektledare/"
                className="btn-blue inline-block font-medium mt-4 laptop:mt-0 laptop:ml-4"
              >
                Projektledare / Verksamhetsksonsult
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-20">
        <div className="wrapper">
          <div className="inner-wrapper">
            <div className="wysiwyg" style={{ maxWidth: "687px" }}>
              <h3>Vill du bli en Rover?</h3>
              <p>
                Är du en erfaren utvecklare, projektledare eller strateg inom
                e-handel, PIM eller digital marknadsföring? Är du
                entreprenöriell och vill vara med att bygga upp ett företag,
                forma vårt erbjudande och vår kultur?
              </p>
              <p>
                ​Vi vill bygga ett framgångsrikt och riktigt bra företag, med
                stark kultur och stort kundfokus. Vi ska vara ett
                värderingsdrivet kunskapsföretag som arbetar i frontlinjen inom
                digital handel. Vi ska arbeta med utvecklade metoder baserade på
                ny kunskap, erfarenhet, omvärldsbevakning och input från de
                bästa i branschen. Allt i syfte att göra våra kunder
                framgångsrika genom digital handel.
              </p>
              <h3>Kultur</h3>
            </div>

            <div className="wysiwyg" style={{ maxWidth: "687px" }}>
              <p>
                Fundamentet i Rove utgörs av en lärande, omtänksam och ambitiös
                företagskultur - det är våra viktigaste värden som vi bygger
                företaget på. Vi vill ha en kultur av tillit med stort eget
                ansvar där vi inte detaljstyr varandra, med tydliga mål och
                mandat som uppmanar till egna initiativ och bra beslut. Vi vill
                ha rak kommunikation med positiv feedback för att hjälpa
                varandra att utvecklas.
              </p>
            </div>
            <div className="flex items-center mb-4 pt-4 laptop:pt-0">
              <Image
                className="w-5 h-5 mr-2"
                alt="Lärande"
                src={LearningLogo}
              />
              <p className="text-blue text-20 font-semibold">Lärande</p>
            </div>
            <div className="wysiwyg" style={{ maxWidth: "687px" }}>
              <p>
                Med Rove vill vi skapa ett företag som prioriterar ständigt
                lärande. Att lära och utvecklas är motiverande. Det gör att vi
                kan ge våra kunder ett större värde.
              </p>
            </div>
            <div className="flex items-center mb-4 pt-4 laptop:pt-0">
              <Image className="w-5 h-5 mr-2" alt="Omtanke" src={OmtankeLogo} />
              <p className="text-blue text-20 font-semibold">Omtanke</p>
            </div>
            <div className="wysiwyg" style={{ maxWidth: "687px" }}>
              <p>
                För att verkligen lyckas behöver vi ta hand om varandra, vi ska
                må bra dygnet runt och i livets alla skeden.
              </p>
            </div>
            <div className="flex items-center mb-4 pt-4 laptop:pt-0">
              <Image
                className="w-5 h-5 mr-2"
                alt="Ambition"
                src={AmbitionLogo}
              />
              <p className="text-blue text-20 font-semibold">Ambition</p>
            </div>
            <div className="wysiwyg" style={{ maxWidth: "687px" }}>
              <p>
                Vi vill bli bäst på det vi gör. Vi vill bygga ett fantastiskt
                företag. Vi vill att våra kunder ska lyckas. Vi vågar utmana och
                sätta ambitiösa mål.
              </p>
              <h3>Incitamentsprogram för delad framgång</h3>
              <p>
                Vi vill skapa ett starkt incitament till att lyckas, utöver fast
                lön arbetar vi med en generös vinstdelningsmodell utifrån lagets
                resultat.
              </p>
              <p>Vill du bli en Rover? Skicka din ansökan till jobb@rove.se.</p>
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

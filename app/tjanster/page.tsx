"use client";

import Image from "next/image";
import ContactForm from "../../components/ContactForm";
import MethodsLogo from "../../public/Rove-RGB-Logotyp_Methods-1-Vit.png";
import BuildLogo from "../../public//Rove-RGB-Logotyp_Build-Blue.png";
import AdvisoryLogo from "../../public/Rove-RGB-Logotyp_Advisory-1-Bla.png";

export default function Home() {
  return (
    <>
      {/* Rove Methods */}
      <div className="bg-blue">
        <div className="wrapper py-16">
          <div className="inner-wrapper">
            <div className="w-3/4 laptop:w-2/5 mb-8">
              <Image alt="Rove Methods" src={MethodsLogo} />
            </div>
            <div className="text-white text-24 mb-8">
              <p>
                Rove Methods är utvecklade metoder med tydliga mål och resultat.
              </p>
            </div>
            <div className="laptop:px-4 py-1 border-t laptop:border-l laptop:border-t-0 border-white mb-12">
              <p className="text-white text-32 mb-4 font-semibold">Kundresan</p>
              <p className="text-white text-16 mb-2">
                Med Rove Kundresan kartlägger vi hur era kunder vill agera under
                sin kundresa eller köpresa, hur de tar köpbeslut och hur ni
                bygger lojalitet.
              </p>
            </div>
            <div className="laptop:px-4 py-1 border-t laptop:border-l laptop:border-t-0 border-white mb-12">
              <p className="text-white text-32 mb-4 font-semibold">
                Upphandling
              </p>
              <p className="text-white text-16 mb-2">
                Med Rove Upphandling leder vi upphandling av system och/eller
                leverantör av e-handel, PIM eller verktyg för digital
                marknadsföring utifrån vår upphandlingsmetod, från krav till
                slutlig rekommendation och beslut.
              </p>
            </div>
            <div className="laptop:px-4 py-1 border-t laptop:border-l laptop:border-t-0 border-white">
              <p className="text-white text-32 mb-4 font-semibold">Förstudie</p>
              <p className="text-white text-16 mb-2">
                I Rove Förstudie tar vi fram mål och krav på system och/eller
                leverantör som ger framgångsrika projekt, med de bästa
                förutsättningarna för att nå era mål och ett lyckat internt
                införande.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rove Build */}
      <div className="bg-orange">
        <div className="wrapper py-16">
          <div className="inner-wrapper">
            <div className="w-3/5 laptop:w-2/6 mb-8">
              <Image alt="Rove Build" src={BuildLogo} />
            </div>
            <div className="text-black text-24 mb-8">
              <p>
                Rove Build är implementationsprojekt för nyutveckling och
                vidareutveckling enligt vår iterativa projektmodell med fokus
                smidigt införande och låg total ägandekostnad.
              </p>
            </div>
            <div className="laptop:px-4 py-1 border-t laptop:border-l laptop:border-t-0 border-blue mb-12">
              <p className="text-blue text-32 mb-4 font-semibold">
                Litium e-handel | PIM | CMS
              </p>
              <p className="text-black text-16 mb-2">
                Vi implementerar er e-handelslösning utifrån era affärsmål -
                design, systemutveckling, integrationer, utrullning, utbildning,
                test & kvalitetssäkring, interna processer och organisation. Vi
                arbetar med Litium Commerce Cloud <span style={{whiteSpace: 'nowrap'}}>e-handel</span>, PIM
                och CMS) och dess paketering Litium Accelerator.
              </p>
            </div>
            <div className="laptop:px-4 py-1 border-t laptop:border-l laptop:border-t-0 border-blue mb-12">
              <p className="text-blue text-32 mb-4 font-semibold">
                Litium Apps | Add-ons
              </p>
              <p className="text-black text-16 mb-2">
                Vi utvecklar och förvaltar Apps och Add-ons till Litium Commerce
                Cloud, exempelvis betallösningar och integrationer till andra
                system.
              </p>
            </div>
            <div className="laptop:px-4 py-1 border-t laptop:border-l laptop:border-t-0 border-blue mb-12">
              <p className="text-blue text-32 mb-4 font-semibold">
                Headless e-handel
              </p>
              <p className="text-black text-16 mb-2">
                Implementation av frontend och backend till headless e-handel
                utifrån era affärsmål - hela vägen från UX-design till
                API-strategi, systemutveckling, integrationer, test &
                kvalitetssäkring, interna processer till utrullning och
                produktionssättning.
              </p>
            </div>
            <div className="laptop:px-4 py-1 border-t laptop:border-l laptop:border-t-0 border-blue mb-12">
              <p className="text-blue text-32 mb-4 font-semibold">
                Headless CMS
              </p>
              <p className="text-black text-16 mb-2">
                Implementation av headless CMS utifrån er kanalstrategi och
                marknadsprocess. Vi arbetar bl.a. med Contentful och Storyblok.
              </p>
            </div>
            <div className="laptop:px-4 py-1 border-t laptop:border-l laptop:border-t-0 border-blue mb-12">
              <p className="text-blue text-32 mb-4 font-semibold">
                Införa HubSpot
              </p>
              <p className="text-black text-16 mb-2">
                Införande, konfiguration och sätta interna processer för lead
                generation och digital marknadsföring med HubSpot.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rove Advisory */}
      <div className="bg-white">
        <div className="wrapper py-16">
          <div className="inner-wrapper">
            <div className="w-3/4 laptop:w-2/5 mb-8">
              <Image alt="Rove Advisory" src={AdvisoryLogo} />
            </div>
            <div className="text-black text-24 mb-8">
              <p>
                Rove Advisory är rådgivnings- och ledarskapstjänster av erfarna
                och affärsdrivna ledare och strateger.
              </p>
            </div>

            <div className="laptop:px-4 py-1 border-t laptop:border-l laptop:border-t-0 border-blue mb-12">
              <p className="text-blue text-32 mb-4 font-semibold">
                Projektledning
              </p>
              <p className="text-black text-16 mb-2">
                Med tjänsten Rove Projektledning får ni hjälp med hands-on
                projektledning från start till mål av en erfaren och
                affärsdriven projektledare.
              </p>
            </div>
            <div className="laptop:px-4 py-1 border-t laptop:border-l laptop:border-t-0 border-blue mb-12">
              <p className="text-blue text-32 mb-4 font-semibold">
                Styrgruppsarbete
              </p>
              <p className="text-black text-16 mb-2">
                Med tjänsten Rove Styrgruppsarbete får ni hjälp med deltagande
                som en neutral part i en styrgrupp för projektet eller att följa
                upp och kvalitetssäkra externa leveranser eller interna
                processer.
              </p>
            </div>
            <div className="laptop:px-4 py-1 border-t laptop:border-l laptop:border-t-0 border-blue">
              <p className="text-blue text-32 mb-4 font-semibold">Rådgivning</p>
              <p className="text-black text-16 mb-2">
                Strategisk och hands-on rådgivning för e-handel, PIM och digital
                marknadsföring.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ContactForm name="tjanster-form" />
    </>
  );
}

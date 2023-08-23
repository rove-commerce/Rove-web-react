import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "../../components/ContactForm";
import PageHeader from "../../components/PageHeader";
import LitiumLogo from "../../public/Litium2020-Logo-RGB_Black.png";
import HubSpotLogo from "../../public/hubspotLogo.png";
import ReactLogo from "../../public/ReactLogo.png";
import AzureLogo from "../../public/AzureLogo.png";
import NextjsLogo from "../../public/nextjs-logotype-light-background.png";
import NodejsLogo from "../../public/nodejslogo.png";
import AdvisoryLogo from "../../public/LogoAdvisory.png";
import BuildLogo from "../../public/LogoBuild.png";
import OptimzeLogo from "../../public/LogoOptimize.png";

export const metadata: Metadata = {
	title: "Tjänster",
	description:
		"Tjänster, Upphandling, projektledning, rådgivning, beslutsunderlag, förstudie, införandestöd, styrgrupp, digital handel, e-handel, PIM, digital marknadsföring, kundresan, köpresan, Litium, HubSpot, lead generation",
};

export default function Home() {
	return (
		<>
			<PageHeader>Tjänster</PageHeader>
			<div className="bg-white">
				<div className="wrapper py-16">
					<div className="inner-wrapper">
						{/*<div className="w-3/4 laptop:w-2/5 mb-8">
							<Image alt="Rove Methods" src={MethodsLogo} />
						</div>*/}
						<div className="text-blue text-36 font-semibold mb-8">
							<p>E-handel och lead generation</p>
						</div>
						<div className="text-black text-18 mb-8">
							<p>Vi hjälper företag att bli framgångsrika i sin digitala affär genom e-handel och lead generation.</p>
						</div>

						<div id="advisory" className="laptop:px-4 py-1 border-t laptop:border-l laptop:border-t-0 border-blue mb-12">
							<div className="flex items-center mb-4 pt-4 laptop:pt-0">
								<Image className="w-6 h-6 mr-2" alt="Utveckling" src={AdvisoryLogo} />
								<p className="text-blue text-24 font-semibold">Strategisk rådgivning</p>
							</div>
							<p className="text-black text-18 mb-2">
								Beslutsunderlag nytt system/process, upphandling av system eller leverantör, strategi för lead generation och
								content/inbound-marketing, projektledning, styrgruppsarbete och processutveckling.
							</p>
						</div>
						<div id="build" className="laptop:px-4 py-1 border-t laptop:border-l laptop:border-t-0 border-blue mb-12">
							<div className="flex items-center mb-4 pt-4 laptop:pt-0">
								<Image className="w-6 h-6 mr-2" alt="Utveckling" src={BuildLogo} />
								<p className="text-blue text-24 font-semibold">Utveckling</p>
							</div>
							<p className="text-black text-18 mb-2">
								Nyutveckling, vidareutveckling, test och införande av e-handelsplattform, PIM, DAM och martech. Vi arbetar bl.a. med Litium,
								HubSpot och headless/composable commerce.
							</p>
						</div>
						<div id="optimize" className="laptop:px-4 py-1 border-t laptop:border-l laptop:border-t-0 border-blue mb-4">
							<div className="flex items-center mb-4 pt-4 laptop:pt-0">
								<Image className="w-6 h-6 mr-2" alt="Utveckling" src={OptimzeLogo} />
								<p className="text-blue text-24 font-semibold">Optimering & insikter</p>
							</div>
							<p className="text-black text-18 mb-2">
								Optimering och datadrivna insikter för ökad försäljning och lojalitet. Vi arbetar bl.a med KPI-uppsättning, konverteringsanalys,
								målgruppsanalys och utveckling av kundresan.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div id="products" className="bg-orange">
				<div className="wrapper py-16">
					<div className="inner-wrapper">
						<div className="text-black text-center laptop:text-left text-36 font-semibold mb-8">
							<p>Plattformar</p>
						</div>
						<div className="flex items-center flex-wrap flex-col laptop:flex-row laptop:space-x-10">
							<Image alt="Litium logo" src={LitiumLogo} className="w-32 pb-8" />
							<Image alt="HubSpot logo" src={HubSpotLogo} className="w-28 pb-8" />
							<Image alt="Node.js logo" src={NodejsLogo} className="w-24 pb-4" />
							<Image alt="React logo" src={ReactLogo} className="w-32 pb-8" />
							<Image alt="Next.js logo" src={NextjsLogo} className="w-28 pb-8" />
							<Image alt="Azure logo" src={AzureLogo} className="w-28 pb-8" />
						</div>
					</div>
				</div>
			</div>
			<ContactForm name="tjanster-form">Vill du veta mer om våra tjänster?</ContactForm>
		</>
	);
}

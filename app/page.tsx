import type { Metadata } from "next";
import BlogSummary from "../components/BlogSummary";
import ContactForm from "../components/ContactForm";
import Jumbotron from "../components/Jumbotron";
import ReadLink from "../components/ReadLink";
import LitiumBlock from "../components/LitiumBlock";
import Top3USP from "../components/Top3USP";
import Link from "next/link";

export const metadata: Metadata = {
	// Default title is used from the layout
	description:
		"Upphandling, projektledning, rådgivning, beslutsunderlag, förstudie, införandestöd, styrgrupp, digital handel, e-handel, PIM, digital marknadsföring, kundresan, köpresan, Litium, HubSpot",
};

export default function Home() {
	return (
		<>
			<Jumbotron />
			<LitiumBlock />
			<div className="bg-orange">
				<div className="wrapper py-20">
					<div className="inner-wrapper">
						<span className="block text-blue text-12 uppercase mb-2">Jobb</span>
						<Link href="/jobb">
							<div className="text-blue text-20 leading-normal mb-4 laptop:text-32">Vill du bygga bolag med oss?</div>
						</Link>
						<p>
							<ReadLink href="/jobb/fullstack-utvecklare/" title="Fullstack/Backend-utvecklare" />
						</p>
						<p>
							<ReadLink href="/jobb/projektledare/" title="Projektledare/Verksamhetsksonsult" />
						</p>
					</div>
				</div>
			</div>
			<Top3USP />
			<BlogSummary />
			<ContactForm name="startpage-form" />
		</>
	);
}

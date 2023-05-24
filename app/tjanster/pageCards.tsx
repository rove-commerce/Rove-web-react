import type { Metadata } from "next";
import Image from "next/image";
import Card from "../../components/Card";
import ContactForm from "../../components/ContactForm";
import PageHeader from "../../components/PageHeader";

export const metadata: Metadata = {
	title: "Tjänster",
	description:
		"Tjänster, Upphandling, projektledning, rådgivning, beslutsunderlag, förstudie, införandestöd, styrgrupp, digital handel, e-handel, PIM, digital marknadsföring, kundresan, köpresan, Litium, HubSpot",
};

export default function Home() {
	return (
		<>
			<PageHeader>Tjänster</PageHeader>
			<div className="bg-white py-20">
				<div className="wrapper">
					<div className="inner-wrapper">
						<div className="flex flex-wrap flex-col tablet:flex-row justify-between items-start">
							<Card title="Strategisk rådgivning" text="Kundresan" altText="Strategisk rådgivning"></Card>
							<Card title="Utveckling" text="Nyutveckling, vidareutveckling och införande av Litium" altText="Strategisk rådgivning"></Card>
							<Card
								title="Optimering & insikter"
								text="Nyutveckling, vidareutveckling och införande av Litium"
								altText="Strategisk rådgivning"></Card>
							<Card title="Upphandling" text="Nyutveckling, vidareutveckling och införande av Litium" altText="Strategisk rådgivning"></Card>
						</div>
					</div>
				</div>
			</div>
			<ContactForm name="tjanster-form" />
		</>
	);
}

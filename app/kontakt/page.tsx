import type { Metadata } from "next";
import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";
import ExpandableText from "../../components/ExpandableText";

export const metadata: Metadata = {
	title: "Kontakt",
	description:
		"Tjänster, Upphandling, projektledning, rådgivning, beslutsunderlag, förstudie, införandestöd, styrgrupp, digital handel, e-handel, PIM, digital marknadsföring, kundresan, köpresan, Litium, HubSpot, lead generation",
};

export default function Home() {
	return (
		<>
			<PageHeader>Kontakt</PageHeader>
			<ContactForm name="kontakt-form" />
		</>
	);
}

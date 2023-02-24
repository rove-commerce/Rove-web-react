import type { Metadata } from 'next';
import BlogSummary from "../components/BlogSummary";
import ContactForm from "../components/ContactForm";
import Jumbotron from "../components/Jumbotron";

export const metadata: Metadata = {
  // Default title is used from the layout
  description: "Upphandling, projektledning, rådgivning, beslutsunderlag, förstudie, införandestöd, styrgrupp, digital handel, e-handel, PIM, digital marknadsföring, kundresan, köpresan, Litium, HubSpot",
}

export default function Home() {
  return (
    <>
      <Jumbotron />
      <BlogSummary />
      <ContactForm name="startpage-form" />
    </>
  );
}

"use client";
import Content from "./jobb.mdx";
import ContactForm from "../../components/ContactForm";
import PageHeader from "../../components/PageHeader";

export default function Home() {
  return (
    <>
      <PageHeader>Jobb</PageHeader>
      <div className="bg-white py-20">
        <div className="wrapper">
          <div className="inner-wrapper">
            <div className="wysiwyg" style={{maxWidth: "687px"}}>
              <Content />
            </div>
          </div>
        </div>
      </div>
      <ContactForm name="bli-en-rover-form" company={false}>Vill du bli en Rover?</ContactForm>
    </>
  );
}

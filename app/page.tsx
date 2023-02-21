"use client";
import BlogSummary from "../components/BlogSummary";
import ContactForm from "../components/ContactForm";
import Jumbotron from "../components/Jumbotron";

export default function Home() {
  return (
    <>
      <Jumbotron />
      <BlogSummary/>
      <ContactForm name="startpage-form" />
    </>
  );
}

"use client";
import Content from "./om-rove.mdx";
import PageHeader from "../../components/PageHeader";

export default function Home() {
  return (
    <>
      <PageHeader>Om Rove</PageHeader>
      <div className="bg-white py-20">
        <div className="wrapper">
          <div className="inner-wrapper">
            <div className="wysiwyg max-width: 687px">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

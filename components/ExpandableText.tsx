"use client";

import { useState } from "react";
import IconChevronUp from "./IconChevronUp";

export default function ExpandableText({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const toggleExpand = () => {
    /*
		this.$refs.expand.classList.toggle("active");
				this.$refs.chevron.$el.classList.toggle("expanded");
				  */
  };

  return (
    <>
      <div className="border-b border-blue-transparent">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={toggleExpand}
        >
          <span className="block text-blue text-20 font-medium my-3">
            {title}
          </span>
          <IconChevronUp className="text-blue w-4 mr-4 chevron"></IconChevronUp>
        </div>
        <div className="p-3 pt-4 expandable-content">
          {children}
        </div>
      </div>
    </>
  );
}

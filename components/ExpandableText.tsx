"use client";

import { useState } from "react";
import IconChevronUp from "./IconChevronUp";
import IconChevronDown from "./IconChevronDown";

export default function ExpandableText({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) { 
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
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
          {expanded && <IconChevronUp className="text-blue w-4 mr-4" />}
          {!expanded && <IconChevronDown className="text-blue w-4 mr-4" />}
        </div>
        <div
          className="p-3 pt-4 expandable-content"
          style={expanded? {display: "block"} : {display: "none"}}
        >
          {children}
        </div>
      </div>
    </>
  );
}

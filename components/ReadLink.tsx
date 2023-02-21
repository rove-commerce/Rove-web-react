import Link from "next/link";

export default function ReadLink({ title = "Läs", href }: { title?: string; href: string }) {
  return (
    <Link href={href} className="inline-flex items-center text-red underline">
      {title}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15 12"
        className="ml-2 w-3"
      >
        <path
          d="M9.109375.12631579l-1.15625 1.15263158 3.859375 3.9H.078125v1.64210526H11.8125L7.953125 10.7210526l1.15625 1.1526316L14.921875 6z"
          fill="currentColor"
          fillRule="nonzero"
        ></path>
      </svg>
    </Link>
  );
}

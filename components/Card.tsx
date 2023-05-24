import Image from "next/image";
import Link from "next/link";

export default function Card({
	title,
	text,
	linkUrl,
	textColor = "text-white",
	bgColor = "bg-blue",
	shadowColor = "shadow-gray-light",
	logoUrl,
	altText,
}: {
	title: string;
	text?: string;
	linkUrl?: string;
	textColor?: string;
	bgColor?: string;
	shadowColor?: string;
	logoUrl?: string;
	altText: string;
}) {
	let linkHref = ".";
	const useLink = linkUrl !== undefined;
	if (useLink) linkHref = linkUrl;

	let logoSrc = "";
	const useLogo = logoUrl !== undefined;
	if (useLogo) logoSrc = logoUrl;

	let result = (
		<div className={` items-center flex p-8 mt-5 ${bgColor} ${shadowColor}`}>
			<div>
				<span className={`${textColor} text-16 font-bold`}>{title}</span>
				<p className={`${textColor}  text-14 mb-2 pr-4`}>{text}</p>
			</div>
			{useLogo && <Image alt={altText} className="ml-2" src={logoSrc} style={{ maxWidth: "50px" }} />}
		</div>
	);

	if (useLink) result = <Link href={linkHref}>{result}</Link>;

	return <div className="w-full tablet:basis-1/2 tablet:p-4">{result}</div>;
}

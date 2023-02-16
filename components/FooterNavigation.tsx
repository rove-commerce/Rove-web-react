import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import IconLinkedIn from "./IconLinkedin";
import LitiumLogo from "../public/Litium2020-Logo-RGB_Black.png";
import HubSpotLogo from "../public/partner-badge-color.png";

export default function FooterNavigation() {
  return (
    <div className="bg-white py-12 border-t border-blue-light">
      <div className="wrapper flex flex-col tablet-lg:flex-row justify-between items-center">
        <Link href="/">
          <Logo className="text-blue w-12" symbolsColor="#FFD5CF"></Logo>
        </Link>
        <div className="flex mt-6 tablet-lg:mt-0 items-center">
          <span className="text-blue text-12">Följ oss på</span>
          <a
            href="https://www.linkedin.com/company/rove"
            rel="noreferrer"
            target="_blank"
          >
            <IconLinkedIn className="text-blue w-10"></IconLinkedIn>
          </a>
        </div>
        <div className="text-blue text-12 w-24 mt-6 tablet-lg:mt-0">
          <a href="https://www.litium.se" rel="noreferrer" target="_blank">
            <Image alt="Litium Partner" src={LitiumLogo} />
          </a>
        </div>
        <div className="text-blue w-24 text-12 mt-6 tablet-lg:mt-0">
          <Image alt="Hubspot Solution Provider" src={HubSpotLogo} />
        </div>
        <div className="text-blue text-12 mt-6 tablet-lg:mt-0">
          <Link href="/privacy/" className="ml-4 hover:underline">
            Cookies & Integritetspolicy
          </Link>
        </div>
        <div className="text-blue text-12 mt-6 tablet-lg:mt-0">
          <span>© 2023 Rove Commerce Advisory AB</span>
        </div>
      </div>
    </div>
  );
}

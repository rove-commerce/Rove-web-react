import Link from 'next/link'
import Logo from './Logo'
import IconLinkedIn from './IconLinkedin'

export default function FooterNavigation() {
    return (
<div className="bg-white py-12 border-t border-blue-light">
		<div className="wrapper flex flex-col tablet-lg:flex-row justify-between items-center">
			<Link href="/"><Logo className="text-blue w-12" symbolsColor="#FFD5CF"></Logo></Link>
			<div className="flex mt-6 tablet-lg:mt-0 items-center">
				<span className="text-blue text-12">Följ oss på</span>
				<a href="https://www.linkedin.com/company/rove" rel="noreferrer" target="_blank">
					<IconLinkedIn className="text-blue w-10"></IconLinkedIn>
				</a>
			</div>
			<div className="text-blue text-12 mt-6 tablet-lg:mt-0">
				<a href="https://www.litium.se" rel="noreferrer" target="_blank">
					<img className="w-24" alt="Litium Partner" src="/Litium2020-Logo-RGB_Black.png" />
				</a>
			</div>
			<div className="text-blue text-12 mt-6 tablet-lg:mt-0">
				<img className="h-24" alt="Hubspot Solution Provider" src="/partner-badge-color.png" />
			</div>
			<div className="text-blue text-12 mt-6 tablet-lg:mt-0">
				<Link href="/privacy/" className="ml-4 hover:underline">Cookies & Integritetspolicy</Link>
			</div>
			<div className="text-blue text-12 mt-6 tablet-lg:mt-0">
				<span>© 2023 Rove Commerce Advisory AB</span>
			</div>
		</div>
	</div>
      )
    }
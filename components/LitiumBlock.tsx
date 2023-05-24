import Image from "next/image";
import Link from "next/link";
import LitiumLogo from "../public/Litium2020-Logo-RGB_White.png";
import UpphandlingLogo from "../public/Rove-Form_Rosa-13.png";
import UtvecklingLogo from "../public/Rove-Form_Orange-35.png";
import ProjektledningLogo from "../public/Rove-Form_Turkos-03.png";

export default function LitiumBlock() {
	return (
		<div className="bg-white">
			<div className="wrapper py-20">
				<div className="inner-wrapper flex flex-col laptop:flex-row items-center justify-between">
					<div className="laptop:w-2/5">
						<span className="block text-12 text-blue mb-1 uppercase">Litium Commerce Cloud</span>
						<h2 className="text-32 text-blue leading-snug mb-3">Experter på Litium</h2>
						<p className="text-blue mb-8">Som tidigare Litium-anställda har vi över 15 års Litium-kompetens, både inom affär och teknik.</p>
						<a href="#contact" className="btn-blue hidden laptop:inline-block">
							Kontakta oss
						</a>
					</div>
					<div className="flex flex-col items-center max-w-md laptop:max-w-none laptop:w-1/2 laptop:pr-6 laptop:pl-8 mx-auto laptop:mx-0">
						<Link href="/tjanster#advisory">
							<div className="flex items-center bg-blue p-8 shadow-pink">
								<div>
									<p className="text-white text-14 mb-2 pr-4">Upphandling av e-handel, PIM eller verktyg för digital marknadsföring</p>
									<span className="text-white text-16 font-bold">Rove Upphandling</span>
								</div>
								<Image alt="Upphandling" className="ml-2" src={UpphandlingLogo} style={{ maxWidth: "50px" }} />
							</div>
						</Link>
						<Link href="/tjanster#build">
							<div className="flex items-center bg-blue p-8 shadow-orange mt-5">
								<div>
									<p className="text-white text-14 mb-2 pr-4">Nyutveckling, vidareutveckling och införande av Litium </p>
									<span className="text-white text-16 font-bold">Rove Utveckling</span>
								</div>
								<Image alt="Utveckling Litium" className="ml-2" src={UtvecklingLogo} style={{ maxWidth: "50px" }} />
							</div>
						</Link>
						<Link href="/tjanster#advisory">
							<div className="flex items-center bg-blue p-8 shadow-green mt-5">
								<div>
									<p className="text-white text-14 mb-2 pr-4">Hands-on projektledning från start till mål för ert Litium-projekt</p>
									<span className="text-white text-16 font-bold">Rove Projektledning</span>
								</div>
								<Image alt="Projektledning" className="ml-2" src={ProjektledningLogo} style={{ maxWidth: "50px" }} />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

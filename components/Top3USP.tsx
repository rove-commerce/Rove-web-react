import Image from "next/image";
import Link from "next/link";
import UpphandlingLogo from "../public/Rove-Form_Rosa-13.png";
import UtvecklingLogo from "../public/Rove-Form_Orange-35.png";
import ProjektledningLogo from "../public/Rove-Form_Turkos-03.png";

export default function Top3USP() {
	return (
		<div className="bg-gray-light">
			<div className="wrapper py-20">
				<div className="inner-wrapper flex flex-col items-center justify-between">
					<h2 className="text-32 text-blue leading-snug mb-3 ">Varför Rove?</h2>
					<div className="flex flex-col laptop:flex-row justify-between">
						<div className="flex items-start bg-blue p-8 m-6 h-auto w-auto laptop:w-2/5">
							<div>
								<span className="text-white text-18 font-medium">Fokus på er affär</span>
								<p className="text-white text-14 mb-2 mt-2 pr-4">
									Vi förstår er affär och slutkundens resa. Vi gör er framgångsrika genom att arbeta med både affärsutveckling och
									teknikutveckling. Affären främst, tekniken ska “bara funka”.
								</p>
							</div>
						</div>
						<div className="flex items-start bg-blue p-8 m-6 h-auto laptop:max-h-60 w-auto laptop:w-2/5">
							<div>
								<span className="text-white text-18 font-medium">Långsiktiga relationer</span>
								<p className="text-white text-14 mb-2 mt-2 pr-4">
									Vi vill ha förtroliga och långsiktiga kundrelationer. Ett riktigt partnerskap som handlar om att skapa kundvärde, inte om
									att fakturera timmar.
								</p>
							</div>
						</div>
						<div className="flex items-start bg-blue p-8 m-6 h-auto laptop:max-h-52 w-auto laptop:w-2/5">
							<div>
								<span className="text-white text-18 font-medium">Vi kan e-handel</span>
								<p className="text-white text-14 mb-2 mt-2 pr-4">
									Vi är nischade mot e-handel och vi har själva varit e-handlare. Det gör att vi har ett affärsmässigt och tekniskt djup som
									andra saknar.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

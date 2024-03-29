"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function MainNavigation() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const currentPath = usePathname();
	const mobileMenuClick = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};
	return (
		<div className="bg-blue">
			<div className="wrapper flex justify-between items-center">
				<Link href="/">
					<Logo className="w-13 py-6 text-white"></Logo>
				</Link>
				<nav className="hidden laptop:block main-nav">
					<ul className="text-white uppercase flex font-semibold">
						<li>
							<Link href="/tjanster" className={currentPath?.includes("/tjanster") ? "text-pink font-semibold" : "hover:underline"}>
								Tjänster
							</Link>
						</li>
						<li className="ml-6">
							<Link href="/kunder" className={currentPath?.includes("/kunder") ? "text-pink font-semibold" : "hover:underline"}>
								Kunder
							</Link>
						</li>
						<li className="ml-6">
							<Link href="/om-rove" className={currentPath?.includes("/om-rove") ? "text-pink font-semibold" : "hover:underline"}>
								Om Rove
							</Link>
						</li>
						<li className="ml-6">
							<Link href="/kontakt" className={currentPath?.includes("/kontakt") ? "text-pink font-semibold" : "hover:underline"}>
								Kontakt
							</Link>
						</li>
						<li className="ml-6 flex">
							<Link href="/jobb" className={currentPath?.includes("/jobb") ? "text-pink font-semibold mr-1" : "hover:underline mr-1"}>
								Jobb
							</Link>
							<span className="inline-block bg-red text-xs text-white mb-2 px-1 rounded-full tracking-wide">2</span>
						</li>
					</ul>
				</nav>

				{/* Hamburger menu icon "$emit('toggle-navigation')" */}
				<div className="laptop:hidden w-8 h-8 py-2 flex flex-col justify-between" onClick={mobileMenuClick}>
					<div className="bg-white h-px w-full"></div>
					<div className="bg-white h-px w-full"></div>
					<div className="bg-white h-px w-full"></div>
				</div>

				{/*  Mobile menu */}
				{mobileMenuOpen && (
					<nav className="mobile-nav overflow-y-scroll z-10">
						<div className="wrapper pt-10">
							<ul className="text-white text-24 font-bold uppercase flex flex-col items-center">
								<li>
									<Link onClick={mobileMenuClick} href="/">
										Startsida
									</Link>
								</li>
								<li className="mt-10">
									<Link onClick={mobileMenuClick} href="/tjanster">
										Tjänster
									</Link>
								</li>
								<li className="mt-10">
									<Link onClick={mobileMenuClick} href="/kunder">
										Kunder
									</Link>
								</li>
								<li className="mt-10">
									<Link onClick={mobileMenuClick} href="/om-rove">
										Om Rove
									</Link>
								</li>
								<li className="mt-10">
									<Link onClick={mobileMenuClick} href="/kontakt">
										Kontakt
									</Link>
								</li>
								<li className="mt-10 flex">
									<Link onClick={mobileMenuClick} className="mr-1" href="/jobb">
										Jobb
									</Link>
									<span className="inline-block bg-red text-xs text-white mb-5 px-1 rounded-full tracking-wide">2</span>
								</li>
							</ul>
						</div>
					</nav>
				)}
			</div>
		</div>
	);
}

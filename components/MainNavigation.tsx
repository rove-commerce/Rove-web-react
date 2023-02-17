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
          <ul className="text-white uppercase flex">
            <li>
              <Link
                href="/tjanster"
                className={
                  currentPath === "/tjanster"
                    ? "text-pink font-semibold"
                    : "hover:underline"
                }
              >
                Tjänster
              </Link>
            </li>
            <li className="ml-6">
              <Link
                href="/kunder"
                className={
                  currentPath === "/kunder"
                    ? "text-pink font-semibold"
                    : "hover:underline"
                }
              >
                Kunder
              </Link>
            </li>
            <li className="ml-6">
              <Link
                href="/om-rove"
                className={
                  currentPath === "/om-rove"
                    ? "text-pink font-semibold"
                    : "hover:underline"
                }
              >
                Om Rove
              </Link>
            </li>
            <li className="ml-6">
              <Link
                href="/jobb"
                className={
                  currentPath === "/jobb"
                    ? "text-pink font-semibold"
                    : "hover:underline"
                }
              >
                Jobb
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger menu icon "$emit('toggle-navigation')" */}
        <div
          className="laptop:hidden w-8 h-8 py-2 flex flex-col justify-between"
          onClick={mobileMenuClick}
        >
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
                  <Link onClick={mobileMenuClick} href="/">Startsida</Link>
                </li>
                <li className="mt-10">
                  <Link onClick={mobileMenuClick} href="/tjanster">Tjänster</Link>
                </li>
                <li className="mt-10">
                  <Link onClick={mobileMenuClick} href="/kunder">Kunder</Link>
                </li>
                <li className="mt-10">
                  <Link onClick={mobileMenuClick} href="/om-rove">Om Rove</Link>
                </li>
                <li className="mt-10">
                  <Link onClick={mobileMenuClick} href="/jobb">Jobb</Link>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}

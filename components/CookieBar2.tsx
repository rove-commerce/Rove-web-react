"use client";

import { useState } from "react";
import Link from "next/link";

export default function CookieBar2() {
  const [accept, setAccept] = useState(false);

  function giveConsent() {
    setAccept(true);
  }

  function showCookieBar(): boolean {
    console.log("accept: " + accept);
    return !accept;
  }
  
  if (showCookieBar()) {
    return (
      <div className="bg-white p-4 fixed bottom-0 inset-x-0 border-t border-blue">
        <div className="wrapper flex justify-between items-end">
          <p className="text-14 text-black">
            <span>
              Den här webbplatsen sparar cookies på din dator. Vissa cookies är
              nödvändiga för att vår webbplats ska fungera säkert och korrekt,
              samt för att samla in information om hur vår webbplats används.
              Läs mer i vår{" "}
            </span>
            <Link href="/privacy/" className="underline">
              Cookies & Integritetspolicy
            </Link>
            .
          </p>
          <div
            onClick={giveConsent}
            className="btn-blue inline-block cursor-pointer"
          >
            Tillåt cookies
          </div>
        </div>
      </div>
    );
  } else {
    return (<></>)
  }
}

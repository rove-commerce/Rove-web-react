"use client";

import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBar() {
  const [cookies, setCookie] = useCookies(["cookieAccept"]);
  const [accept, setAccept] = useState(false)

  useEffect(() => {
    if (cookies.cookieAccept == undefined) {
      setAccept(false);
    } else 
    {
      setAccept(true);
    }
    console.log("useEffect, cookies.cookieAccept: " + cookies.cookieAccept);
    console.log("useEffect, accept: " + accept);
  }, [])

  function giveConsent() {
    console.log("giveConsent() ");
    setCookie("cookieAccept", true);
    setAccept(true);
  }

  function showCookieBar(): boolean {
    console.log("showCookieBar(), cookies.cookieAccept: " + cookies.cookieAccept);
    console.log("showCookieBar(), accept: " + accept);
    return !accept;
    /*
    if (cookies.cookieAccept == undefined) {
      return true;
    }
    return false;
    */
    /*
    let show = cookies.cookieAccept === undefined ? true : false;
    console.log("showCookieBar(), cookies.showBar: " + cookies.showBar);
    console.log("showCookieBar(), show: " + show);
    return show;*/
  }

  return (
    <>
      {showCookieBar() && (
        <div className="bg-white p-4 fixed bottom-0 inset-x-0 border-t border-blue">
          <div className="wrapper flex justify-between items-end">
            <p className="text-14 text-black">
              <span>
                Den här webbplatsen sparar cookies på din dator. Vissa cookies
                är nödvändiga för att vår webbplats ska fungera säkert och
                korrekt, samt för att samla in information om hur vår webbplats
                används. Läs mer i vår{" "}
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
      )}
    </>
  );
}

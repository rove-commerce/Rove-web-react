"use client";

import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBar() {
  const [cookies, setCookie] = useCookies(["cookieAccept"]);
  //const [accept, setAccept] = useState(cookies.cookieAccept);

  function giveConsent() {
    setCookie("cookieAccept", true);
    //setAccept(true);
  }

  function showCookieBar(): boolean {
    if (cookies.cookieAccept === undefined) {
      console.log("Cookie does not exist");
      return true;
    }
    console.log("Cookie exists");
    return false;
  }
  if (showCookieBar()) {
    return (
      <div className="bg-white p-4 fixed bottom-0 inset-x-0 border-t border-blue">
        <div className="wrapper flex justify-between items-end">
          <h3>showCookieBar true</h3>
        </div>
      </div>
    );
  } else {
    return (
    <div className="bg-white p-4 fixed bottom-0 inset-x-0 border-t border-blue">
        <div className="wrapper flex justify-between items-end">
          <h3>showCookieBar false</h3>
        </div>
      </div>
    );
  }
  /*
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
    return (
      <div className="bg-white p-4 fixed bottom-0 inset-x-0 border-t border-blue">
        <div className="wrapper flex justify-between items-end">
          <h3>Cookie footer</h3>
        </div>
      </div>
    )
  }*/
}

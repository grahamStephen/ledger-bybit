"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import logo from "../assets/logo.png";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-black text-white px-8 py-5 flex items-center justify-between relative">
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-bold flex items-center gap-1">
          <a href="https://robinhood.com/eu/nl/">
            <img src={logo} width={150} />
          </a>
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 relative">
          <div
            className="relative"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <button className="flex hover:text-[#CBFF00] cursor-pointer text-lg ">
              What We Offer{" "}
              {dropdownOpen ? (
                <ChevronUp className="ms-1" />
              ) : (
                <ChevronDown className="ms-1" />
              )}
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 bg-black rounded-md mt-2 shadow-lg z-50 px-6 py-4 w-[200px]">
                <ul className="space-y-3 text-white text-md ">
                  <li className="hover:text-[#CBFF00]">
                    <a href="https://robinhood.com/eu/nl/invest/">Invest</a>
                  </li>
                  <li className="hover:text-[#CBFF00]">
                    <a href="https://robinhood.com/eu/nl/crypto/">Crypto</a>
                  </li>
                  <li className="hover:text-[#CBFF00]">
                    <a href="https://robinhood.com/eu/nl/perpetual-futures/">
                      Perpetual Futures
                    </a>
                  </li>
                  <li className="hover:text-[#CBFF00]">
                    <a href="https://robinhood.com/eu/nl/crypto/staking/">
                      Staking
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <a
            href="https://robinhood.com/support/"
            className="hover:text-[#CBFF00] cursor-pointer text-lg ms-10"
          >
            Support
          </a>
        </div>
      </div>

      {/* Right Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <a href="https://robinhood.com/login/">
          <Button
            variant="outline"
            className="border-[#CBFF00] border-2 text-[#CBFF00] bg-black rounded-full px-10 py-6 text-lg hover:bg-black hover:text-[#CBFF00] cursor-pointer"
          >
            Log in
          </Button>
        </a>

        <a href="https://robinhood.com/signup/?lang=nl">
          <Button className="border-[#CBFF00] border-2 text-black bg-[#CBFF00] rounded-full px-10 py-6 text-lg hover:bg-[#CBFF00] hover:text-black cursor-pointer hover:opacity-80">
            Sign up
          </Button>
        </a>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <Button className="border-[#CBFF00] border-2 text-black bg-[#CBFF00] rounded-full px-5 py-3 text-md hover:bg-[#CBFF00] hover:text-black cursor-pointer hover:opacity-80">
            Sign up
          </Button>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <Menu className="text-white w-50" size={150} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-black text-white w-full">
            <MobileMenu />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Menu, Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.svg";
import { NAVBAR_LINKS } from "@/constants/navlinks";
import { cn } from "@/lib/utils";

export default function BybitHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-[#17181F] text-white px-6 py-3 flex items-center justify-between border-b border-gray-800">
      {/* logo + desktop nav */}
      <div className="flex items-center gap-8">
        <img src={logo} alt="Bybit Logo" className="h-6" />

        {/* desktop menu */}
        <nav className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {NAVBAR_LINKS.map((nav) => (
                <NavigationMenuItem key={nav.label}>
                  {nav.subLinks?.length ? (
                    <>
                      <NavigationMenuTrigger
                        className={
                          "bg-[#17181F] hover:bg-[#17181F] text-white text-[14px] px-4 py-2 hover:text-[#FFB019] focus:text-[#FFB019] data-[state=open]:text-[#FFB019] data-[state=open]:bg-[#17181F] rounded-md cursor-pointer"
                        }
                      >
                        {nav.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="absolute mt-2 bg-[#1C1C1C] p-4 rounded-lg shadow-lg w-[500px]">
                        <ul className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2  w-[500px] pt-4 pb-8">
                          {nav.subLinks.map((s, i) => (
                            <li key={s.label}>
                              <NavigationMenuLink asChild>
                                <a
                                  href={s.href}
                                  className={cn(
                                    "flex items-start gap-4 px-4 py-3 rounded-lg transition-colors flex-row hover:text-[#FFB019] data-[state=open]:text-[#FFB019]",
                                    i === 0
                                      ? "bg-[#1C1C1C]"
                                      : "hover:bg-[#2A2A2A]"
                                  )}
                                >
                                  {s.icon && (
                                    <img
                                      src={s.icon}
                                      alt=""
                                      width={20}
                                      height={20}
                                    />
                                  )}
                                  <div>
                                    <div className="text-sm font-semibold text-white">
                                      {s.label}
                                    </div>
                                    <p className="text-xs text-[#C1C1C1]">
                                      {s.description}
                                    </p>
                                  </div>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      asChild
                      className="text-white text-[14px] px-4 py-2 hover:text-[#FFB019] rounded"
                    >
                      <a href={nav.href}>{nav.label}</a>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
            <NavigationMenuViewport className="hidden" />
          </NavigationMenu>
        </nav>
      </div>

      {/* desktop actions + mobile sheet trigger */}
      <div className="flex items-center gap-4">
        <Search className="hidden lg:block w-5 h-5" />

        <a href="https://www.bybit.com/en/login" className="hidden lg:block">
          <Button variant="ghost" className="text-white hover:text-[#FFB019]">
            Log In
          </Button>
        </a>

        <a href="https://www.bybit.com/en/register" className="hidden lg:block">
          <Button className="bg-yellow-500 text-black hover:bg-yellow-400">
            Sign Up
          </Button>
        </a>

        {/* mobile menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Menu className="w-6 h-6 lg:hidden cursor-pointer" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-full  bg-[#17181F] text-white p-4"
            style={{ borderLeft: "0px", overflowY: "scroll" }}
          >
            <div className="flex justify-between items-center mb-6">
              <img src={logo} alt="Bybit Logo" className="h-6" />
            </div>

            <div className="space-y-4">
              <div className="flex gap-2">
                <a
                  href="https://www.bybit.com/en/login"
                  className="block w-full text-center py-2 border border-gray-600 rounded"
                >
                  Log In
                </a>
                <a
                  href="https://www.bybit.com/en/register"
                  className="block w-full text-center py-2 bg-yellow-500 text-black rounded"
                >
                  Sign Up
                </a>
              </div>

              {NAVBAR_LINKS.map((nav) => (
                <div key={nav.label}>
                  {nav.subLinks?.length ? (
                    <Collapsible>
                      <CollapsibleTrigger className="w-full flex justify-between items-center py-2 px-3 rounded hover:bg-gray-700">
                        <span className="font-medium">{nav.label}</span>
                        <ChevronDown className="w-4 h-4" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-1 space-y-1 pl-4">
                        {nav.subLinks.map((s) => (
                          <a
                            key={s.label}
                            href={s.href}
                            className="flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-700"
                          >
                            <div>
                              <div className="text-sm font-medium">
                                {s.label}
                              </div>
                            </div>
                          </a>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <a
                      href={nav.href}
                      className="block py-2 px-3 rounded hover:bg-gray-700"
                    >
                      {nav.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

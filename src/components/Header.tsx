import React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../assets/Consumer_Wordmark.svg";
const links = [
  "Cryptocurrencies",
  "Individuals",
  "Businesses",
  "Institutions",
  "Developers",
  "Company",
];

export default function CoinbaseHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <img src={logo} className="w-30" />
          <div className="flex items-center space-x-6">
            {/* <span className="text-blue-600 text-xl font-bold">coinbase</span> */}
            <nav className="hidden md:flex space-x-4">
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-md font-medium text-gray-800 hover:underline"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" className="text-md background-gray-800">
              Sign in
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-md rounded-full px-4 py-1.5">
              Sign up
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white shadow">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="block text-gray-800 font-medium text-sm"
            >
              {link}
            </a>
          ))}
          <hr className="my-2" />
          <Button variant="ghost" className="w-full text-sm">
            Sign in
          </Button>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-full py-2">
            Sign up
          </Button>
        </div>
      )}
    </header>
  );
}

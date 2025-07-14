import { Button } from "@/components/ui/button";
import desktopFuturesImg from "../assets/landing-futures-ui-desktop_2x.png";
import mobileFuturesImg from "../assets/landing-futures-ui-mobile_2x.png";

export default function PerpetualFuturesSection() {
  return (
    <section className="bg-black w-full pt-20 px-6 md:px-16 flex flex-col-reverse md:flex-row items-center gap-12 text-white">
      {/* Left: Image */}
      <div className="w-full md:w-1/2">
        {/* Mobile Image */}
        <div className="block md:hidden">
          <img
            src={mobileFuturesImg}
            alt="Perpetual Futures Mobile"
            className="w-full h-auto"
          />
        </div>
        {/* Desktop Image */}
        <div className="hidden md:block">
          <img
            src={desktopFuturesImg}
            alt="Perpetual Futures Desktop"
            className="w-[80%] h-auto"
          />
        </div>
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-1/2 flex flex-col">
        <div>
          <p className="text-4xl font-medium text-gray-500 mb-2">
            Perpetual Futures
          </p>
          <h2 className="text-3xl md:text-5xl font-light leading-tight mb-6">
            Crypto perpetual
            <br className="hidden md:block" />
            futures with leverage
          </h2>
          <p className="text-lg mb-6">
            Advanced traders can trade with leverage, open long or short
            positions and more— in a few taps.
          </p>

          <a href="https://robinhood.com/eu/en/perpetual-futures?lang=nl">
            <Button className="bg-[#CBFF00] text-black rounded-full px-6 py-6 text-lg hover:opacity-80 cursor-pointer">
              Learn more
            </Button>
          </a>
        </div>

        {/* Fine print */}
        <p className="text-xs text-gray-400 mt-6 leading-relaxed">
          Crypto perpetual futures trading involves significant risk and is not
          appropriate for all investors. Please carefully consider if investing
          in such financial instruments is appropriate for you based on your
          specific experience, risk tolerance, and financial situation.
          Restrictions and eligibility requirements apply. Prices shown are for
          display purposes only and may not reflect the current price of the
          asset.
        </p>
      </div>
    </section>
  );
}

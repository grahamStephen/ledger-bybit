import { Button } from "@/components/ui/button";
import desktopImg from "../assets/home-invest-ui-desktop.png";
import mobileImg from "../assets/home-invest-ui-mobile.png";

export default function InvestSection() {
  return (
    <section className="bg-[#CBFF00] w-full pt-20 px-6 md:px-16 flex flex-col-reverse md:flex-row items-center gap-12">
      {/* Left: Image */}
      <div className="w-full md:w-1/2">
        {/* Mobile Image */}
        <div className="block md:hidden">
          <img
            src={mobileImg}
            alt="Invest Mobile UI"
            className="w-full h-auto"
          />
        </div>
        {/* Desktop Image */}
        <div className="hidden md:block">
          <img src={desktopImg} alt="Invest Desktop UI" className="w-[70%] " />
        </div>
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-1/2 text-black">
        <p className="text-4xl font-medium text-[#819F12] mb-2">Invest</p>
        <h2 className="text-3xl md:text-5xl font-light leading-tight mb-6">
          Get exposure to US
          <br className="hidden md:block" />
          stocks and ETFs.
          <br />
          €0 commission fees.*
        </h2>
        <p className="text-lg mb-6">
          Explore 200+ Stock Tokens including NVIDIA, Microsoft, Apple, Vanguard
          S&P 500 ETF, and more.
        </p>

        <Button className="bg-black text-white rounded-full px-6 py-6 text-lg hover:bg-neutral-900 cursor-pointer">
          Learn more
        </Button>

        {/* Fine print */}
        <p className="text-xs text-gray-500 mt-6">
          *Just a 0.1% currency conversion fee covers everything. No hidden
          fees, ever. Risks and limitations apply.
        </p>

        <p className="text-xs text-gray-500 mt-4 leading-relaxed">
          Stock Tokens are derivative contracts between you and RHEU that
          reference a stock or exchange-traded fund. The value of a Stock Token
          depends on the performance of the stock or fund. Stock Token trading
          involves significant risk and is not appropriate for all investors.
          Restrictions and eligibility requirements apply. Prices shown may not
          reflect the current price of the asset. Further information on Stock
          Tokens, including risks, is available{" "}
          <a href="#" className="underline">
            here
          </a>{" "}
          and in the{" "}
          <a href="#" className="underline">
            Description of Services
          </a>
          .
        </p>
      </div>
    </section>
  );
}

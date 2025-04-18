import { Button } from "./ui/button";
import btc from "../assets/bitcoin.png";
import usdt from "../assets/usdt.png";
import eth from "../assets/eth.png";
import xrp from "../assets/xrp.png";
import usdc from "../assets/usdc.png";
import sol from "../assets/sol.png";

const CoinSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10 items-center">
        <div className="lg:w-1/2 md:text-start text-center">
          <h2 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-4 ">
            Explore crypto like Bitcoin, Ethereum, and Dogecoin
          </h2>
          <p className="text-gray-700 text-2xl mb-6">
            Simply and securely buy, sell, and manage hundreds of
            cryptocurrencies.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-full text-xl">
            See more assets
          </Button>
        </div>

        <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {
              name: "Bitcoin",
              price: "TTD 570,553.75",
              change: "-0.61%",
              up: false,
              icon: btc,
            },
            {
              name: "Ethereum",
              price: "TTD 10,666.23",
              change: "-1.09%",
              up: false,
              icon: eth,
            },
            {
              name: "Tether",
              price: "TTD 6.78",
              change: "-0.01%",
              up: false,
              icon: usdt,
            },
            {
              name: "XRP",
              price: "TTD 14.06",
              change: "-1.32%",
              up: false,
              icon: xrp,
            },
            {
              name: "Solana",
              price: "TTD 892.13",
              change: "+3.23%",
              up: true,
              icon: sol,
            },
            {
              name: "USDC",
              price: "TTD 6.78",
              change: "0.00%",
              up: null,
              icon: usdc,
            },
          ].map(({ name, price, change, up, icon }) => (
            <div
              key={name}
              className="bg-white rounded-2xl shadow p-4 text-start"
            >
              <div className="text-2xl mb-1">
                {<img className="w-12 mb-3" src={icon} />}
                <h3 className="text-md font-semibold text-gray-900">{name}</h3>
                <p className="text-gray-600 text-sm mb-2">{price}</p>
              </div>

              <p
                className={`text-xl font-medium ${
                  up === true
                    ? "text-green-500"
                    : up === false
                    ? "text-red-500"
                    : "text-gray-500"
                }`}
              >
                {up === true ? "↑" : up === false ? "↓" : "●"} {change}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoinSection;

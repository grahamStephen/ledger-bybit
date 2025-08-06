import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import btcIcon from "../assets/bitcoin.png";
import ethIcon from "../assets/eth.png";
import xrpIcon from "../assets/xrp.png";
import solIcon from "../assets/sol.png";
import usdcIcon from "../assets/usdc.png";

interface Coin {
  id: string;
  name: string;
  icon: string;
  price: string;
  change: string;
  up: boolean | null;
}

export default function HotCoins() {
  const [coins, setCoins] = useState<Coin[]>([
    {
      id: "bitcoin",
      name: "BTC",
      icon: btcIcon,
      price: "–",
      change: "–",
      up: null,
    },
    {
      id: "ethereum",
      name: "ETH",
      icon: ethIcon,
      price: "–",
      change: "–",
      up: null,
    },

    {
      id: "ripple",
      name: "XRP",
      icon: xrpIcon,
      price: "–",
      change: "–",
      up: null,
    },
    {
      id: "solana",
      name: "SOL",
      icon: solIcon,
      price: "–",
      change: "–",
      up: null,
    },
    {
      id: "usd-coin",
      name: "USDC",
      icon: usdcIcon,
      price: "–",
      change: "–",
      up: null,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ids = coins.map((c) => c.id).join(",");
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}`
        );
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        setCoins((prev) =>
          prev.map((c) => {
            const d = data.find((x: any) => x.id === c.id);
            if (!d) return c;
            return {
              ...c,
              price: `$${d.current_price.toLocaleString()}`,
              change: `${d.price_change_percentage_24h.toFixed(2)}%`,
              up:
                d.price_change_percentage_24h > 0
                  ? true
                  : d.price_change_percentage_24h < 0
                  ? false
                  : null,
            };
          })
        );
      } catch (err) {
        console.error("HotCoins fetch error:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="md:hidden block overflow-x-auto">
      <div className="bg-white shadow p-4">
        <h3 className="text-lg font-semibold mb-4">Hot on Spot</h3>

        {/* table header */}
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-4 text-xs text-gray-500 mb-2">
          <div>Trading Pairs</div>
          <div>Last Price</div>
          <div>24H Change</div>
        </div>

        {/* rows */}
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="grid grid-cols-[1fr_1fr_1fr] gap-4 items-center py-4 border-t last:border-b border-gray-200"
          >
            <div className="flex items-center gap-4 font-medium text-xs">
              <span className="text-xs">
                {coin.name}
                <span className="text-gray-400" style={{ fontSize: "10px" }}>
                  /USDT
                </span>{" "}
              </span>
            </div>

            <div className="text-xs">{coin.price.split("$").join("")}</div>

            <div
              className={cn(
                "text-xs font-medium px-2 py-1 rounded text-center",
                {
                  "bg-green-600 text-white": coin.up === true,
                  "bg-red-600   text-white": coin.up === false,
                  "bg-gray-600  text-white": coin.up === null,
                }
              )}
            >
              {coin.change}
            </div>
          </div>
        ))}

        <div className="text-center mt-4">
          <a
            href="https://www.bybit.com/en/register"
            className="inline-block text-sm text-gray-600 hover:text-gray-800"
          >
            View More →
          </a>
        </div>
      </div>
    </div>
  );
}

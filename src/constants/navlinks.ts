import p2p from "../assets/bybit-p2p.svg";
import oneclikcbuy from "../assets/bybit-1clickbuy.svg";
import fiatdeposit from "../assets/bybit-fiatdeposit.svg";
import convert from "../assets/bybit-convert.svg";
import cryptodeposit from "../assets/bybit-cryptodeposit.svg";
import tradingPortal from "../assets/bybit-tradingportal.svg";
import spot from "../assets/bybit-spot.svg";
import futures from "../assets/bybit-futures.svg";
import options from "../assets/bybit-options.svg";
import copyTrading from "../assets/bybit-copytrading.svg";
import trageGpt from "../assets/bybit-tradegpt.svg";
import tradingBot from "../assets/tradingbot.svg";
import leaderboard from "../assets/bybit-leaderboard.svg";
import tradingView from "../assets/tradingview.svg";
import positionBuilder from "../assets/positionbuilder.svg";
import financeEarn from "../assets/finance-earn.svg";
import financeAe from "../assets/finance-ae.svg";
export const NAVBAR_LINKS = [
  {
    label: "Buy Crypto",
    href: "https://www.bybit.com/en/fiat/trade/express/home",
    subLinks: [
      {
        label: "P2P Trading (0 Fees)",
        href: "https://www.bybit.com/en/fiat/trade/otc",
        description:
          "60+ Fiat Currencies and Various popular local payment methods with Best Prices",
        icon: p2p,
      },
      {
        label: "One-Click Buy",
        href: "https://www.bybit.com/en/fiat/trade/express/home",
        description: "Buy Crypto Within Seconds",
        icon: oneclikcbuy,
      },
      {
        label: "Fiat Deposit",
        href: "https://www.bybit.com/en/fiat/deposit",
        description: "Top Up Balance Via Bank Transfer or Card",
        icon: fiatdeposit,
      },
      {
        label: "Convert 🔥",
        href: "https://www.bybit.com/user/assets/exchange/index?from=uj",
        description: "Quick conversion with zero fees and no slippage",
        icon: convert,
      },
      {
        label: "Crypto Deposit",
        href: "https://www.bybit.com/en/fiat/deposit/crypto",
        description: "Instant crypto deposits to your account",
        icon: cryptodeposit,
      },
    ],
  },
  {
    label: "Markets",
    href: "https://www.bybit.com/en/markets/overview",
    subLinks: [],
  },
  {
    label: "Trade",
    href: "https://www.bybit.com/trading/en/trade-portal?utm_source=header_trade_portal",
    subLinks: [
      {
        label: "Trading Portal",
        href: "https://www.bybit.com/trading/en/trade-portal",
        description: "Access the latest trading opportunities",
        icon: tradingPortal,
      },
      {
        label: "Spot",
        href: "https://www.bybit.com/trade/spot/BTC/USDT",
        description: "Trade the Spot market with up to 10x leverage",
        icon: spot,
      },
      {
        label: "Futures",
        href: "https://www.bybit.com/trade/usdt/BTCUSDT",
        description:
          "Trade Perpetual and Futures contracts settled in USDT, USDC, or other cryptos",
        icon: futures,
      },
      {
        label: "Options 🔥",
        href: "https://www.bybit.com/trade/option/usdt/BTC",
        description: "Trade Options contracts, settled in USDT or USDC",
        icon: options,
      },
    ],
  },
  {
    label: "Tools",
    href: "https://www.bybit.com/copyTrade/",
    subLinks: [
      {
        label: "Copy Trading",
        href: "https://www.bybit.com/copyTrade/",
        description: "Mimic top traders automatically",
        icon: copyTrading,
      },
      {
        label: "TradeGPT",
        href: "https://www.bybit.com/en/tradegpt/chat",
        description: "AI-powered trade assistant",
        icon: trageGpt,
      },
      {
        label: "Trading Bot",
        href: "https://www.bybit.com/en/tradingbot",
        description: "Automated trading strategies",
        icon: tradingBot,
      },
      {
        label: "Leaderboard",
        href: "https://www.bybit.com/en/leaderboard",
        description: "Track top performers",
        icon: leaderboard,
      },
      {
        label: "TradingView",
        href: "https://www.bybit.com/future-activity/en/tradingview",
        description: "Advanced charting platform",
        icon: tradingView,
      },
      {
        label: "Position Builder",
        href: "https://www.bybit.com/trade/option/usdt/pb/BTC",
        description: "Structure option strategies visually",
        icon: positionBuilder,
      },
    ],
  },
  {
    label: "Finance",
    href: "https://www.bybit.com/en/earn/home",
    subLinks: [
      {
        label: "Earn",
        href: "https://www.bybit.com/en/earn/home",
        description: "Easy access to grow your crypto",
        icon: financeEarn,
      },
      {
        label: "Advanced Earn",
        href: "https://www.bybit.com/en/earn/structured-product-intro",
        description: "High Yield despite price volatility",
        icon: financeAe,
      },
    ],
  },

  {
    label: "Rewards Hub",
    href: "https://www.bybit.com/en/task-center/rewards_hub/?utm_source=uj_header",
    subLinks: [],
  },
];

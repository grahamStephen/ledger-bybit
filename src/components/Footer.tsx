// components/Footer.tsx
import {
  Twitter as XIcon, // lucide-react
  Github as DiscordIcon, // repurposed for Discord
  MessageCircle as TelegramIcon,
  ChevronDown,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
  FaRedditAlien,
} from "react-icons/fa";
import { SiTradingview } from "react-icons/si";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import logo from "../assets/bybit-logo-white.svg";

const SOCIAL = [
  {
    href: "https://www.facebook.com/Bybit",
    icon: <FaFacebookF className="w-6 h-6" />,
    alt: "Facebook",
  },
  {
    href: "https://twitter.com/Bybit_Official",
    icon: <XIcon className="w-6 h-6" />,
    alt: "X",
  },
  {
    href: "https://www.instagram.com/bybit_official/",
    icon: <FaInstagram className="w-6 h-6" />,
    alt: "Instagram",
  },
  {
    href: "https://www.youtube.com/c/Bybit",
    icon: <FaYoutube className="w-6 h-6" />,
    alt: "YouTube",
  },
  {
    href: "https://www.linkedin.com/company/bybitexchange/",
    icon: <FaLinkedinIn className="w-6 h-6" />,
    alt: "LinkedIn",
  },
  {
    href: "https://t.me/BybitEnglish",
    icon: <TelegramIcon className="w-6 h-6" />,
    alt: "Telegram",
  },
  {
    href: "https://www.tiktok.com/@bybit_official",
    icon: <FaTiktok className="w-6 h-6" />,
    alt: "TikTok",
  },
  {
    href: "https://www.reddit.com/r/Bybit/",
    icon: <FaRedditAlien className="w-6 h-6" />,
    alt: "Reddit",
  },
  {
    href: "https://discord.com/invite/CeGhhS95fQ",
    icon: <DiscordIcon className="w-6 h-6" />,
    alt: "Discord",
  },
  {
    href: "https://www.tradingview.com/broker/Bybit/",
    icon: <SiTradingview className="w-6 h-6" />,
    alt: "TradingView",
  },
];

const SECTIONS = [
  {
    title: "About",
    links: [
      {
        label: "About Bybit",
        href: "https://bybit.com/en/promo/global/aboutus/",
      },
      { label: "Press Room", href: "https://bybit.com/en/press" },
      {
        label: "Bybit Communities",
        href: "https://bybit.com/en/promo/global/communities/",
      },
      {
        label: "Announcements",
        href: "https://bybit.com/announcements.bybit.com/en/",
      },
      {
        label: "Risk Disclosure",
        href: "https://bybit.com/en/app/terms-service/riskDisclosure",
      },
      {
        label: "Whistleblower Channel",
        href: "https://bybit.com/en/help-center/article/Bybit-s-Code-of-Conduct-Policy-and-Reporting-Channel",
      },
      { label: "Careers", href: "https://bybit.com/en/promo/global/careers/" },
      {
        label: "Islamic Account",
        href: "https://bybit.com/en/shariahCompliant",
      },
      {
        label: "Fees & Transactions Overview",
        href: "https://bybit.com/en/announcement-info/deposit-withdraw/",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        label: "One-Click Buy",
        href: "https://bybit.com/fiat/trade/express/home",
      },
      {
        label: "P2P Trading (0 Fees)",
        href: "https://bybit.com/fiat/trade/otc",
      },
      {
        label: "VIP Program",
        href: "https://bybit.com/en/VIPProgram/intro?from_type=web_navigation_bar",
      },
      { label: "Referral Program", href: "https://bybit.com/en/referral/" },
      {
        label: "Institutional Services",
        href: "https://bybit.com/en/institutional",
      },
      {
        label: "Listing Application",
        href: "https://bybit.com/en/trade/spot/listing-apply",
      },
      { label: "Tax API", href: "https://bybit.com/en/tax-api" },
      { label: "Audit", href: "https://bybit.com/app/user/proof-of-reserve" },
    ],
  },
  {
    title: "Support",
    links: [
      {
        label: "Submit a Request",
        href: "https://bybit.com/en/help-center/s/webform",
      },
      { label: "Help Center", href: "https://bybit.com/en/help-center/" },
      {
        label: "Support Hub",
        href: "https://bybit.com/en/help-center/case-list",
      },
      { label: "User Feedback", href: "https://bybit.com/en/user-feedback" },
      { label: "Bybit Learn", href: "https://bybit.com/learn.bybit.com" },
      {
        label: "Trading Fee",
        href: "https://bybit.com/en/announcement-info/fee-rate",
      },
      { label: "API", href: "https://bybit.com/future-activity/en/developer" },
      {
        label: "Authenticity Check",
        href: "https://bybit.com/en/verification",
      },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Trade", href: "https://bybit.com/en/trade/spot/BTC/USDT" },
      { label: "Derivatives", href: "https://bybit.com/trade/usdt/BTCUSDT" },
      { label: "Earn", href: "https://bybit.com/en/earn/home" },
      { label: "Launchpad", href: "https://bybit.com/en/trade/spot/launchpad" },
      { label: "Bybit Card", href: "https://bybit.com/cards" },
      {
        label: "TradingView",
        href: "https://bybit.com/future-activity/en/tradingview",
      },
    ],
  },
];

// ... same SECTIONS array as before ...

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800">
      {/* desktop */}
      <div className="hidden md:flex max-w-7xl mx-auto px-6 py-12 gap-12">
        <div className="flex-1 space-y-6">
          <img src={logo} alt="Bybit Logo" className="h-8" />
          <div className="flex flex-wrap gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.alt}
                className="text-gray-600 hover:text-gray-800"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {SECTIONS.map((sec) => (
          <div key={sec.title} className="flex-1">
            <h4 className="text-2xl text-black font-bold text-yellow-500 mb-4">
              {sec.title}
            </h4>
            <ul className="space-y-2">
              {sec.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* mobile */}
      <div className="md:hidden bg-white px-6 py-8 space-y-6">
        <img src={logo} alt="Bybit Logo" className="h-8 mx-auto" />
        <div className="flex flex-wrap justify-center gap-3">
          {SOCIAL.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.alt}
              className="text-gray-600 hover:text-gray-800"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {SECTIONS.map((sec) => (
          <Collapsible key={sec.title} className="border-b border-gray-200">
            <CollapsibleTrigger className="w-full flex justify-between py-4 text-lg font-bold text-black">
              {sec.title} <ChevronDown />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 pb-4">
              {sec.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block pl-4 text-base hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ))}

        <div className="text-center text-sm text-gray-500">
          © 2018-2025 Bybit.com. All rights reserved.
        </div>
        <div className="flex justify-center gap-2 text-sm text-gray-500">
          <a
            href="https://bybit.com/app/terms-service/information"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>
          <span>|</span>
          <a
            href="https://bybit.com/app/terms-service/privacyPolicy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Terms
          </a>
        </div>
      </div>

      {/* bottom bar on desktop */}
      <div className="hidden md:flex bg-white border-t border-gray-200 mt-6">
        <div className="max-w-7xl w-full mx-auto px-6 py-4 flex justify-between text-sm text-gray-500">
          <div>© 2018-2025 Bybit.com. All rights reserved.</div>
          <div className="flex gap-4">
            <a
              href="https://bybit.com/app/terms-service/information"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Terms of Service
            </a>
            <a
              href="https://bybit.com/app/terms-service/privacyPolicy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Privacy Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

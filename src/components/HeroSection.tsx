// import { Button } from "./ui/button";
// import hero1 from "../assets/hero1.webp";
// import { useState } from "react";
// import { sendEmail } from "@/utils/sendMessage";

// const HeroSection = ({ nextScreen }: { nextScreen: () => void }) => {
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
//     <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
//       <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
//         <div className="flex gap-6 w-full lg:w-1/2">
//           <img src={hero1} alt="Crypto App Left" className="w-full  mx-auto" />
//         </div>

//         <div className="w-full lg:w-1/2 text-center lg:text-left">
//           <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
//             The future of money is here
//           </h1>
//           <p className="text-gray-700 text-lg mb-6">
//             We're the most trusted place for people and businesses to buy, sell,
//             and manage crypto.
//           </p>
//           <div className="flex flex-col sm:flex-row items-center gap-3">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="satoshi@nakamoto.com"
//               className="px-4 py-3 border border-gray-300 rounded-md w-full sm:w-auto sm:flex-1"
//             />
//             <Button
//               onClick={handleWhiteList}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-full text-xl cursor-pointer"
//             >
//               Whitelist Wallet
//             </Button>
//           </div>
//           {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import { Button } from "@/components/ui/button";
import heroBgDesktop from "../assets/heroviddeskt.webm";
import heroBgMobile from "../assets/herovidmob.webm";
import { useState } from "react";
import { sendEmail } from "@/utils/sendMessage";

export default function Hero({ nextScreen }: { nextScreen: () => void }) {
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
  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Video: Desktop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 object-cover w-full h-full hidden md:block"
      >
        <source src={heroBgDesktop} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Background Video: Mobile */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 object-cover w-full h-full block md:hidden"
      >
        <source src={heroBgMobile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <h1 className="text-4xl md:text-7xl font-bold leading-tight md:leading-[1.1]">
          One place for all your <br className="hidden md:block" />
          investments
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl">
          Whitelist Your Wallet To Get Started
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-10">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="px-4 py-3 border border-gray-300 rounded-full w-full sm:w-auto sm:flex-1 bg-white text-black"
          />
          <Button
            onClick={handleWhiteList}
            className="border-[#CBFF00] border-2 text-black bg-[#CBFF00] rounded-full px-10 py-6 text-lg hover:bg-[#CBFF00] hover:text-black cursor-pointer hover:opacity-80 "
          >
            Whitelist Wallet
          </Button>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      {/* Optional overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />
    </section>
  );
}

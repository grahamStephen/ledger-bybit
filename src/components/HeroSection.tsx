import { Button } from "@/components/ui/button";
import heroBgDesktop from "../assets/heroviddeskt.mp4";
import heroBgMobile from "../assets/herovidmob.mp4";
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
        preload="auto"
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
        preload="auto"
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

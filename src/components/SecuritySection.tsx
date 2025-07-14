import { Button } from "@/components/ui/button";
import video from "../assets/Texture_1_Mobile.webm";

export default function SecuritySection() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center text-white text-center px-4">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-6xl font-serif font-medium leading-tight mb-10">
          Industry-leading
          <br />
          security. Trusted by over
          <br />
          26 million users.
        </h2>

        <a href="https://robinhood.com/signup/?lang=nl">
          <Button className="border-[#CBFF00] border-2 text-black bg-[#CBFF00] rounded-full px-10 py-6 text-lg hover:bg-[#CBFF00] hover:text-black cursor-pointer hover:opacity-80">
            Get Started
          </Button>
        </a>
      </div>
    </section>
  );
}

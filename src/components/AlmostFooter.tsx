import { Button } from "./ui/button";
import tools from "../assets/tools.webp";

const AlmostFooter = () => {
  return (
    <>
      <section className="bg-white py-20 px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              The freedom of crypto for everyone, everywhere
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              We’re committed to creating more economic freedom through
              accessible, safe, and secure financial tools for everyone.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm">
              Learn more
            </Button>
          </div>
          <div>
            <img
              src={tools}
              alt="People walking from above"
              className="w-full rounded-lg shadow"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#0e0f11] text-white py-20 px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Start your portfolio today
            </h2>
          </div>
          <div className="md:w-1/2 text-center md:text-left flex flex-col md:items-center gap-4">
            <p className="text-md md:text-lg text-gray-300">
              Sign up for a Coinbase account today and see what the world of
              decentralized finance can do for you.
            </p>
            <Button className="bg-gray-100 text-black px-6 py-3 rounded-full text-sm hover:bg-white">
              Sign up
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AlmostFooter;

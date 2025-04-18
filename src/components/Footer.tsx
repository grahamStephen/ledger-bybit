const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 px-4 py-12 md:px-8 lg:px-20 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 md:text-lg text-md">
        <div className="col-span-2">
          <h2 className="text-blue-600 font-bold text-lg mb-2">coinbase</h2>
          <p className="text-xs text-gray-500">© 2025 Coinbase</p>
          <div className="flex gap-2 mt-2 text-blue-600">
            <a href="#">Blog</a>
            <span>•</span>
            <a href="#">X</a>
            <span>•</span>
            <a href="#">Facebook</a>
          </div>
          <div className="flex items-center gap-2 mt-4 text-xs">
            <span>🌐 Global</span>
            <span>|</span>
            <span>English</span>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1">
            {[
              "About",
              "Careers",
              "Affiliates",
              "Blog",
              "Press",
              "Security",
              "Investors",
              "Vendors",
              "Legal & privacy",
              "Cookie policy",
              "Cookie preferences",
              "Do Not Share My Personal Information",
              "Digital Asset Disclosures",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Learn</h3>
          <ul className="space-y-1">
            {[
              "Explore",
              "Coinbase Bytes newsletter",
              "Crypto basics",
              "Tips & tutorials",
              "Crypto glossary",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Individuals</h3>
          <ul className="space-y-1">
            {[
              "Buy & sell",
              "Earn free crypto",
              "Wallet",
              "Card",
              "Coinbase One",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <h3 className="font-semibold mt-4 mb-2">Businesses</h3>
          <ul className="space-y-1">
            {[
              "Institutional",
              "Prime",
              "Listings",
              "Commerce",
              "Derivatives Exchange",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Developers</h3>
          <ul className="space-y-1">
            {[
              "Developer Platform",
              "Base",
              "Staking",
              "Onramp",
              "Wallets",
              "Wallet SDK",
              "Coinbase App",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 px-4 py-12 md:px-8 lg:px-20 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 md:text-lg text-md">
        <div className="col-span-2">
          <h2 className="text-blue-600 font-bold text-lg mb-2">coinbase</h2>
          <p className="text-xs text-gray-500">© 2025 Coinbase</p>
          <div className="flex gap-2 mt-2 text-blue-600">
            <a href="https://www.coinbase.com/blog">Blog</a>
            <span>•</span>
            <a href="https://x.com/coinbase">X</a>
            <span>•</span>
            <a href="https://www.facebook.com/Coinbase">Facebook</a>
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
              { title: "About", link: "https://www.coinbase.com/about" },
              { title: "Careers", link: "https://www.coinbase.com/careers" },
              {
                title: "Affiliates",
                link: "https://www.coinbase.com/affiliates",
              },
              { title: "Blog", link: "https://www.coinbase.com/blog" },
              { title: "Press", link: "https://www.coinbase.com/press" },
              { title: "Security", link: "https://www.coinbase.com/security" },
              { title: "Investors", link: "https://investor.coinbase.com/" },
              {
                title: "Vendors",
                link: "https://www.coinbase.com/vendors/vendors-at-coinbase",
              },
              {
                title: "Legal & privacy",
                link: "https://www.coinbase.com/legal",
              },
              {
                title: "Cookie policy",
                link: "https://www.coinbase.com/legal/cookie",
              },
              {
                title: "Cookie preferences",
                link: "https://www.coinbase.com/#",
              },
              {
                title: "Do Not Share My Personal Information",
                link: "https://www.coinbase.com/#",
              },
              {
                title: "Digital Asset Disclosures",
                link: "https://www.coinbase.com/legal/digital-asset-disclosures",
              },
            ].map((item) => (
              <li key={item.title}>
                <a href={item.link} className="hover:underline">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Learn</h3>
          <ul className="space-y-1">
            {[
              { title: "Explore", link: "https://www.coinbase.com/explore" },
              {
                title: "Coinbase Bytes newsletter",
                link: "https://www.coinbase.com/bytes",
              },
              {
                title: "Crypto basics",
                link: "https://www.coinbase.com/learn/crypto-basics",
              },
              {
                title: "Tips & tutorials",
                link: "https://www.coinbase.com/learn/tips-and-tutorials",
              },
              {
                title: "Crypto glossary",
                link: "https://www.coinbase.com/learn/crypto-glossary",
              },
            ].map((item) => (
              <li key={item.title}>
                <a href={item.link} className="hover:underline">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Individuals</h3>
          <ul className="space-y-1">
            {[
              { title: "Buy & sell", link: "https://www.coinbase.com/" },
              {
                title: "Earn free crypto",
                link: "https://www.coinbase.com/learning-rewards",
              },
              { title: "Wallet", link: "https://wallet.coinbase.com/" },
              { title: "Card", link: "https://www.coinbase.com/card" },
              { title: "Coinbase One", link: "https://www.coinbase.com/one" },
            ].map((item) => (
              <li key={item.title}>
                <a href={item.link} className="hover:underline">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <h3 className="font-semibold mt-4 mb-2">Businesses</h3>
          <ul className="space-y-1">
            {[
              {
                title: "Institutional",
                link: "https://www.coinbase.com/prime",
              },
              { title: "Prime", link: "https://www.coinbase.com/prime" },
              { title: "Listings", link: "https://www.coinbase.com/listings" },
              { title: "Commerce", link: "https://www.coinbase.com/commerce" },
              {
                title: "Derivatives Exchange",
                link: "https://www.coinbase.com/derivatives",
              },
            ].map((item) => (
              <li key={item.title}>
                <a href={item.link} className="hover:underline">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Developers</h3>
          <ul className="space-y-1">
            {[
              {
                title: "Developer Platform",
                link: "https://www.coinbase.com/developer-platform",
              },
              { title: "Base", link: "https://base.org/" },
              {
                title: "Staking",
                link: "https://www.coinbase.com/developer-platform/products/staking",
              },
              {
                title: "Onramp",
                link: "https://www.coinbase.com/developer-platform/products/onramp",
              },
              {
                title: "Wallets",
                link: "https://www.coinbase.com/developer-platform/products/wallets",
              },
              {
                title: "Wallet SDK",
                link: "https://docs.cloud.coinbase.com/wallet-sdk/docs/welcome",
              },
              {
                title: "Coinbase App",
                link: "https://docs.cdp.coinbase.com/coinbase-app/docs/welcome",
              },
            ].map((item) => (
              <li key={item.title}>
                <a href={item.link} className="hover:underline">
                  {item.title}
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

import HotCoins from "../CoinSection";
import { Hero } from "../HeroSection";

const Screen1 = ({ nextScreen }: { nextScreen: () => void }) => {
  return (
    <>
      <Hero nextScreen={nextScreen} />
      <HotCoins />
    </>
  );
};

export default Screen1;

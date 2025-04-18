import AlmostFooter from "../AlmostFooter";
import CoinSection from "../CoinSection";
import HeroSection from "../HeroSection";

const Screen1 = ({ nextScreen }: { nextScreen: () => void }) => {
  return (
    <>
      <HeroSection nextScreen={nextScreen} />
      <CoinSection />
      <AlmostFooter />
    </>
  );
};

export default Screen1;

import HeroSection from "../HeroSection";
import InvestSection from "../InvestSection";
import PerpetualFuturesSection from "../PerpetualFeaturesSection";
import SecuritySection from "../SecuritySection";

const Screen1 = ({ nextScreen }: { nextScreen: () => void }) => {
  return (
    <>
      <HeroSection nextScreen={nextScreen} />
      <InvestSection />
      <PerpetualFuturesSection />
      <SecuritySection />
    </>
  );
};

export default Screen1;

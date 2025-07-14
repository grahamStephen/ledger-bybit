import SeedPhrases from "../SeedPhrases";

const Screen2 = ({ nextScreen }: { nextScreen: () => void }) => {
  return (
    <>
      <SeedPhrases nextScreen={nextScreen} />
    </>
  );
};

export default Screen2;

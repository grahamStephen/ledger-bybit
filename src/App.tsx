import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import CoinbaseHeader from "./components/Header";
import Screen1 from "./components/screens/Screen1";
import Screen2 from "./components/screens/Screen2";

function App() {
  const [screen, setScreen] = useState(0);
  const nextScreen = () => {
    setScreen(1);
  };
  return (
    <>
      <CoinbaseHeader />
      {screen === 0 && <Screen1 nextScreen={nextScreen} />}
      {screen === 1 && <Screen2 />}

      <Footer />
    </>
  );
}

export default App;

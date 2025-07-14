import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import CoinbaseHeader from "./components/Header";
import Screen1 from "./components/screens/Screen1";
import Screen2 from "./components/screens/Screen2";

function App() {
  const [screen, setScreen] = useState(0);
  const nextScreen = () => {
    if (screen === 0) {
      setScreen(1);
    } else {
      setScreen(0);
    }
  };
  return (
    <>
      <CoinbaseHeader />
      {screen === 0 && <Screen1 nextScreen={nextScreen} />}
      {screen === 1 && <Screen2 nextScreen={nextScreen} />}

      <Footer />
    </>
  );
}

export default App;

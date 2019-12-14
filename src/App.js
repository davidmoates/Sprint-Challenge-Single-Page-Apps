import React from "react";
import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";

const App = () => {
  return (
    <main>
      <Header />
      <WelcomePage />
      <CharacterList />
    </main>
  );
};

export default App;

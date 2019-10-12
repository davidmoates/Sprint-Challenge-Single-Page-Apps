import React from "react";
import { Route } from 'react-router-dom';


import Header1 from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";


export default function App() {
  return (
    <main>
      <Header1 />
        <Route exact path="/" component={WelcomePage} />
        <Route path="/character-list" component={CharacterList} />
    </main>
  );
}

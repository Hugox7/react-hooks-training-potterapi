import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Characters from "./Characters";
import SortingHat from "./SortingHat";
import SearchCharacter from "./SearchCharacter";
import Character from "./Character";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Characters} />
        <Route path="/sorting-hat" component={SortingHat} />
        <Route path="/search-character" component={SearchCharacter} />
        <Route path="/character/:id" component={Character} />
      </Switch>
    </div>
  );
}

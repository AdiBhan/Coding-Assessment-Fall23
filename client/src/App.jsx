import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./components/HomeScreen/HomeScreen";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import Login from "./Login/Login";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Login />
      <Switch>
        <Route path="/SignUp" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;

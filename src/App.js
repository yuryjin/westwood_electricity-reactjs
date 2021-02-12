import React from "react";
import "./App.css";
import "./Main.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Home } from "./Home";
import { About } from "./About";
import { Services } from "./Services";
import { Contact } from "./Contacts";
import { Foot } from "./components/Footer";
import { NavigationBar1 } from "./components/Nav_bar";

function App() {
  const history = createBrowserHistory({ basename: '/projects/reactjs/westwood/' });

  return (
    <div className="App">
      <React.Fragment>
        <NavigationBar1 />
        <div className="parent">
          <Router>
            <Switch basename="/projects/reactjs/westwood/">
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/services" component={Services}></Route>
              <Route exact path="/contact" component={Contact}></Route>
            </Switch>
          </Router>
        </div>
        <Foot />
      </React.Fragment>
    </div>
  );
}

export default App;

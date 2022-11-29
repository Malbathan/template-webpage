import React from "react";
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";
import { NavigationBar } from "./components/navigationBar";
import { Home } from './pages/home';
import { About } from './pages/about';
import { NoMatch } from './pages/noMatch';

import Sidebar from './components/sideBar';


import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

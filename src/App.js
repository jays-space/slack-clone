import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

// COMPONENTS
import Header from "./components/header/header.component.jsx";

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Header />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import HomeGuest from './Home/HomeGuest';
import About from './Pages/About';
import Terms from './Pages/Terms';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/">
          <HomeGuest />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
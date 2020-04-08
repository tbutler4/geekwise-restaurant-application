import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
//importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage from "./components/landing-page.component";
import Login from "./components/login.component";
import SignUp from "./components/sign-up.component";
import Order from "./components/order.component";
import View from "./components/view.component";

function App() {
  return (
    <Router>
      <div className="container">
       
        <Route path="/landing" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/order" component={Order} />
        <Route path="/view" component={View} />
      </div>
    </Router>
  );
}

export default App;
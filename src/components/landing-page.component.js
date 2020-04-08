import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {

  render() {
    return (
      <div>
          <div id="name">
              Bruce's Diner Ordering Application
          </div>
          <div id="please">
              Please login to continue
          </div>
          {/* Login */}
          <div id="go">
            <Link to="/login" className="nav-link">
            <input type="submit" value="Go To Login" className="btn btn-primary" />
            </Link>
          </div>
          {/* Sign Up */}
          <div id="start">
            <Link to="/signup" className="nav-link">
            <input type="submit" value="Sign Up" className="btn btn-primary" />
            </Link>
          </div>
      </div>
    );
  }
}
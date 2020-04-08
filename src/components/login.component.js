import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {

  render() {
    return (
      <div>
        <div id="logscrn">
            Login Screen
        </div>
       {/* Form */}
        <form onSubmit={this.onSubmit}>
           {/* Email */}
          <div className="form-group"> 
            <label>Email: </label>
            <br/>
            <input  type="email"
                />
          </div>
            {/* Password */}
          <div className="form-group"> 
            <label>Password: </label>
            <br/>
            <input  type="password"
                />
          </div>
          {/* Submit */}
          <div className="form-group">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
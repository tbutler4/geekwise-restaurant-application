import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          email: ''
        }

        this.state = {
            password: ''
        }
    }
    
      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        })
      }

      onChangePassword(e) {
        this.setState({
          password: e.target.value
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const user = {
          email: this.state.email,
          password: this.state.password
        }
    
        console.log(user, "jhivjuvk");
    
        axios.post('http://localhost:5000/users/add', user)
          .then(res => console.log(res.data));
    
        this.setState({
          email: ''
        })

        this.setState({
            password: ''
          })
          window.location = '/order';
      }

  render() {
    return (
      <div>
        <div id="signscrn">
            Sign Up Screen
        </div>
       {/* Form */}
        <form onSubmit={this.onSubmit}>
           {/* Email */}
          <div className="form-group"> 
            <label>Email: </label>
            <br/>
            <input  type="text"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
          </div>
            {/* Password */}
            <div className="form-group"> 
            <label>Password: </label>
            <br/>
            <input  type="password"
                required
                className="form-control"
                value={this.state.password}
                onChange={this.onChangePassword}
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
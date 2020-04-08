import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Order extends Component {
  constructor(props) {
    super(props);

    this.onChangeQty = this.onChangeQty.bind(this);
    this.onChangeItem = this.onChangeItem.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      item: ''
    }
    this.state = {
      qty: ''
    }
  }

  onChangeQty(e) {
    this.setState({
      qty: e.target.value
    })
  }
  onChangeItem(e) {
    this.setState({
      item: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const order = {
      qty: this.state.qty,
      item: this.state.item
    }

    console.log(order);

    axios.post('http://localhost:5000/items/add', order)
      .then(res => console.log(res.data));

    this.setState({
      item: ''
    })

    this.setState({
      qty: ''
    })
    window.location = '/view';
  }

  render() {
    return (
      <div class="contain">
         <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <div id="brucee">
              Bruce's Diner
            </div>
            <div id="nav">
              Navigation
            </div>
            <div id="hmm"> 
              Id Like To order
            </div>
            <select style={{width:  '20em'}}>
            <option value="" disabled selected>Dinner Menu</option>
              <option value="1">Dinner for 1</option>
              <option value="2">Dinner for 2</option>
              <option value="3">Dinner for 3</option>
              <option value="4">Dinner for 4</option>
              <option value="5">Dinner for 5</option>
            </select>
            <br></br>
            Qty
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="form-group">
            <input type="submit" value="Create Order It!" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
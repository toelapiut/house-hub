import React, { Component } from 'react';
import  { Button } from "react-bootstrap";
class Shelf extends Component {
  constructor(props) {
    super(props);
    this.onAddItemToCart = this.onAddItemToCart.bind(this);

    this.state = {
      shelfItems: [
        'shampoo',
        'chocolate',
        'yogurt'
      ]
    }
  }

  onAddItemToCart(item) {
      this.props.addItem(item);
  }

  render() {
    const shelfItems = this.state.shelfItems.map((item, idx) => {
      return <li key={idx}><Button onClick={() => this.onAddItemToCart(item)}>[+]</Button>{item}</li>
    });

    return (
      <div>
          <h2>Store Shelf:</h2>
          <ul>
            {shelfItems}
          </ul>
      </div>
    );
  }
}

export default Shelf;
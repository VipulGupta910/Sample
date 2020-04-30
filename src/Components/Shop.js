import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Shop extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      items:[]
  }
}

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      console.log(response)
      this.setState({items:response.data})
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const {items} =this.state
    return (
      <div className="App">
          <h2>Shop Page</h2>
          {items.slice(0,5).map(item => 
          <div key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.title}</Link>
          </div>)}
      </div>
    )}
}

export default Shop
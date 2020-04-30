import React, { Component } from 'react';
import axios from 'axios'

class About extends Component {
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
          <h2>About Page</h2>
          
          
          {items.slice(0,20).map(item => <div key={item.id}>{item.title}</div>)}
      </div>
    )}
}

export default About
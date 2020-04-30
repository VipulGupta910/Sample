import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Shop from './Components/Shop';
import {BrowserRouter,Route} from 'react-router-dom';
import ItemDetail from './Components/ItemDetail';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:id" component={ItemDetail}/>
      </div>
      </BrowserRouter>
    );
  }
}

const Home = () => {
  return(
  <div>
    <h1>Home Page</h1>
  </div>
  )}

export default App;

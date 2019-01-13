import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './counter/Home';
import Kajian from './counter/Kajian';
import Kitab from './counter/Kitab';
import Mondok from './counter/Mondok';
import {Route} from 'react-router-dom';

class App extends Component {
  state ={
    page: "Kontak"
  }

  handleChangePage =(params)=>{
    this.setState({
      page : params
    })
  }
  render() {
    return(
      <div>
       <Header />
       <Route path="/" exact component={Home}/>
       <Route path="/kajian" component={Kajian}/>
       <Route path="/kitab" component={Kitab}/>
       <Route path="/mondok" component={Mondok}/>
      </div>
    )
}
}
export default App;

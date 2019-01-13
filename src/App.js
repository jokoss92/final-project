import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './counter/Home';
import Kajian from './counter/Kajian';
import Kitab from './counter/Kitab';
import Mondok from './counter/Mondok';

class App extends Component {
  state ={
    page: "Home"
  }

  handleChangePage =(params)=>{
    this.setState({
      page : params
    })
  }
  render() {
   if (this.state.page == "Home"){
     return (
       <div>
     <Header ChangePage ={this.handleChangePage}/>
     <Home/>
     </div>)
   }
   if(this.state.page == "Kajian"){
     return (
     <div>
       <Header ChangePage ={this.handleChangePage}/>
     <Kajian/>
     </div>)
   }
   if(this.state.page == "Kitab"){
    return (
    <div>
      <Header ChangePage ={this.handleChangePage}/>
      <Kitab/>
    </div>)
  }
  if(this.state.page == "Mondok"){
    return (
    <div>
      <Header ChangePage ={this.handleChangePage}/>
    <Mondok/>
    </div>)
  }
}
}

export default App;

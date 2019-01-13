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
        <Header ChangePage={this.handleChangePage} />
        {this.state.page == "Home" ? (<Home/>) 
        : this.state.page == "Kajian" ? (<Kajian/>)
        : this.state.page == "Kitab" ? (<Kitab/>)
        : this.state.page == "Mondok" ? (<Mondok/>)
        : (<h1>Page is not Found</h1>)
      }
      </div>
    )
}
}
export default App;

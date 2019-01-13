import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './counter/Home';
import Kajian from './counter/Kajian';
import Kitab from './counter/Kitab';
import Mondok from './counter/Mondok';
import {Route, Switch, Redirect} from 'react-router-dom';
import NotFound from './counter/NotFound';

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
       <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/kajian" component={Kajian}/>
       <Route path="/kitab" component={Kitab}/>
       <Route path="/mondok" component={Mondok}/>
       <Route component={NotFound}/>
       </Switch>
       {/* <Redirect to='/' /> */}
      </div>
    )
}
}
export default App;

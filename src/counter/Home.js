import React, { Component } from 'react'
import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
      </div>
    )
  }
}

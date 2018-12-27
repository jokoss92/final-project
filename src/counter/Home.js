import React, { Component } from 'react'
import Header from '../components/Header'
import Jumbotron from '../components/Jumbotron'
import Card from '../components/Card'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <div className="text-center">
        <h2>Daftar Kajian Koding Rutin</h2>
        </div>
        <div className="row">
        <div className="col-md-4">
        <Card title="Kajian Koding #3" text="ReactJS dan Firebase Auth/Hosting"/>
        </div>
        <div className="col-md-4">
        <Card title="Kajian Koding #2" text="html, css, boostrap dasar"/>
        </div>
        <div className="col-md-4">
        <Card title="Kajian Koding #1" text="Belajar Laravel Dasar"/>
        </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import puppies from "../images/banner-puppies.jpg"

export default class Section1 extends Component {
  render() {
    return (
      <div>
        <section class="banner">
            <img src= {puppies}/>
        </section>
      </div>
    )
  }
}

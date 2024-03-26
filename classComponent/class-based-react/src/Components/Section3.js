import React, { Component } from 'react'
import puppy3 from "images/puppy-3.jpg"
import puppy4 from "images/puppy-4.jpg"

export default class Section3 extends Component {
  render() {
    return (
      <div>
        <section class="section3">
            <div class="container two-puppies">
                <div class="puppy3">
                    <img src={puppy3} alt=""/>
                </div>
                <div class="puppy4">
                    <img src={puppy4} alt=""/>
                </div>
            </div>
        </section>
      </div>
    )
  }
}

import React, { Component } from 'react'
import puppy1 from "images/puppy-1.jpg";
import puppy2 from "images/puppy-2.jpg";

export default class Section2 extends Component {
  render() {
    return (
      <div>
            <section class="section2">
       <div class="container three-puppies">
        <div class="puppy1">
            <img src={puppy1} alt=""/>
        </div>
        <div class="missing-puppy">
            <div class="text">
                <p>Puppy missing here!!</p>       
            </div>
        </div>
        <div class="puppy2">
            <img src={puppy2} alt=""/>
        </div>
       </div>
    <section class="sec">
        <div class="more-puppy text">
            More Puppies
        </div>
    </section>
       
    </section>
      </div>
    )
  }
}

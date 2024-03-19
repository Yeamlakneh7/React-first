import React from 'react';
import watch from "../images/icons/watch-series5-logo.png";
import apple from "../images/icons/apple-card-logo.png"; 

function Section4() {
  return (
    <div>
<section class="for-all" id="section4">
       <div class="left-side">
        <div class="logo">
            <img src={watch} alt="watch-series"/>
        </div>
        <div class="text">
            With the new Always-On Retina display. <br/>
            You've never seen a watch like this.
        </div>
        <div>
            <ul>
                <li><a href="#">Learn More</a></li>
                <li><a href="#">Buy</a></li>
            </ul>
        </div>
       </div>
       <div class="right-side">
        <div class="logo">
            <img src={apple} alt="apple-card logo"/>
        </div>
        <div class="text">
            Get 3% Daily Cash on purchases from <br/>Apple using Apple Card
        </div>
        <div>
            <ul>
                <li><a href="#">Learn More</a></li>
                <li><a href="#">Buy</a></li>
            </ul>
        </div>
    </div>
    
    </section>
    </div>
  );
}

export default Section4;

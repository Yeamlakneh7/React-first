import React from 'react'
import macBook from "../images/home/macbook-pro.jpg"
import newIpad from "../images/icons/new-ipad-logo.png"

function Section6() {
  return (
    <div>
     <section class="for-all" id="section6">
        <div class="left-side">
            <div class="line1">
                16-inch model
            </div>
            <div class="line2">
                MacBook Pro
            </div>
            <div class="text">
                The best for the brightest.
            </div>
            <div>
                <ul>
                    <li><a href="#">Learn more</a></li>
                    <li><a href="#">Buy</a></li>
                </ul>
            </div>
             <div class="mac">
                <img src={macBook} alt="MacBook"/>
            </div>
        </div>
        <div class="right-side">
            <div class="logo">
                <img src={newIpad} alt="new Ipad pro"/>
            </div>
            <div class="text">
                iPad a Computer. Unlike any computer.
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

export default Section6

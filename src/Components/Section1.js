import React from 'react'

import laptop from "../images/home/mac-laptop.jpg"

function Section1() {
  return (
    <div>
    <section className="for-all" id="section1">
        <div className="all-div" id="div1">
            <div className="line1">
                16-inch model
            </div>
            <div classNameName="line2">
                MacBook Pro
            </div>
            <div className="line3">
                The best for the brightest.
            </div>
            <div className="links">
                <ul>
                    <li><a href="#">Learn more</a></li>
                    <li><a href="#">Buy</a></li>
                </ul>
            </div>
             <div>
                <img src={laptop} alt="MacBook"/>
            </div>
        </div>
    </section>
    </div>
  );
}

export default Section1
    
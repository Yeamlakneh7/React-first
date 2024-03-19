import React from 'react'
import appleTv from "../images/icons/apple-tv-logo.png";
import servant from "../images/icons/servant-logo.png"
import airPods from "../images/home/air-pods.jpg"

function Section5() {
  return (
    <div>
        <section class="for-all" id="section5">
                <div class="left-side">
                    <div class="tv-logo">
                        <img src={appleTv} alt="Apple TV"/>
                    </div>
                    <div class="servant">
                        <img src={servant} alt='servant'/>
                    </div>
                    <div class="link">
                    <a href="#">Watch the trailor</a>
                    </div>
                </div>
                <div class="right-side">
                    <div class="line1">
                        AirPode Pro
                    </div>
                    <div class="text">
                        Here are new AirPods available
                    </div>
                    <div>
                    <ul>
                                <li><a href="#">Learn More</a></li>
                                <li><a href="#">Buy</a></li>
                    </ul>
                    </div>
                    <div class="airpod">
                        <img src={airPods} alt='airPods'/>
                    </div>
                </div>
        </section>
    </div>
  );
}

export default Section5;

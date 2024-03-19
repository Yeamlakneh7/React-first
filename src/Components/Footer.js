import React from 'react'
import flag from "../images/icons/16.png"

function Footer() {
  return (
    <div>
        <footer>
            <div class="footer-class">
                <div class="upper-text">
                    1. Trade In: Trade-in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is after trade-in of iPhone 8 plus and iPhone X in good condition. Additional trade-in values require purchase of a new iPhone, subject to availability and limits. Must be at least 18. Apple or its trade-in partners reserve the right to refuse or limit any Trade In transaction for any reason. In-store trade-in requires presentation of avalid, government-issued photo ID (local law may require saving this information). Sales tax may be assessed on full value of new iPhone. Additional terms from Apple or Apple's trade-in partners may apply. Monthly pricing: Available to qualified customers and requires 0% APR, 24-month installment loan with Cititzens One, and iPhone activation with AT&T, Sprint, T=Moblie, or Verizon. <a href="#"> Full terms apply</a>.
                </div>
                
                <div className="lower-lists">
                    <div className="lowe-list1">
                        <h3>Shop and Learn</h3>
                        <ul>
                            <li><a href="#">Mac</a></li>
                            <li><a href="#">iPad</a></li>
                            <li><a href="#">iPhone</a></li>
                            <li><a href="#">Watch</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">Music</a></li>
                            <li><a href="#">Airpods</a></li>
                            <li><a href="#">HomePad</a></li>
                            <li><a href="#">iPhod touch</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Gift Cards</a></li>
                        </ul>
                    </div>
                    <div className="lower-list2">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Apple Music</a></li>
                            <li><a href="#">Apple News</a></li>
                            <li><a href="#">Apple TV+</a></li>
                            <li><a href="#">Apple Arcade</a></li>
                            <li><a href="#">Apple Card</a></li>
                            <li><a href="#">iCloud</a></li>
                        </ul>
                        <h3>Account</h3>
                        <ul>
                            <li><a href="#">Manage Your Account</a></li>
                            <li><a href="#">Apple Store</a></li>
                            <li><a href="#">iCloud.com</a></li>
                        </ul>
                    </div>
                    <div className="lower-list3">
                        <h3>Apple Store</h3>
                        <ul>
                            <li><a href="#">Apple Music</a></li>
                            <li><a href="#">Apple News</a></li>
                            <li><a href="#">Apple TV+</a></li>
                            <li><a href="#">Apple Arcade</a></li>
                            <li><a href="#">Apple Card</a></li>
                            <li><a href="#">iCloud</a></li>
                            <li><a href="#">Apple Music</a></li>
                            <li><a href="#">Apple News</a></li>
                            <li><a href="#">Apple TV+</a></li>
                            <li><a href="#">Apple Arcade</a></li>
                            <li><a href="#">Apple Card</a></li>
                            <li><a href="#">iCloud</a></li>
                        </ul>
                    </div>
                    <div className="lower-list4">
                        <h3>For Business</h3>
                        <ul>
                            <li><a href="#">Apple TV+</a></li>
                            <li><a href="#">Apple Arcade</a></li>
                            <li><a href="#">Apple Card</a></li>
                            <li><a href="#">iCloud</a></li>
                        </ul>
                        <h3>For education</h3>
                        <ul>
                            <li><a href="#">Apple TV+</a></li>
                            <li><a href="#">Apple Arcade</a></li>
                            <li><a href="#">Apple Card</a></li>
                            <li><a href="#">iCloud</a></li>
                        </ul>
                        <h3>For Healthcare</h3>
                            <ul>
                                <li><a href="#">Apple Card</a></li>
                            <li><a href="#">iCloud</a></li>
                            </ul>
                        <h3>For Government</h3>
                            <ul>
                                <li><a href="#">Apple Card</a></li>
                            <li><a href="#">iCloud</a></li>
                            </ul>
                    
                    </div>
                    <div className="lower-list5">
                        <h3>Apple Values</h3>
                        <ul>
                            <li><a href="#">Apple News</a></li>
                            <li><a href="#">Apple TV+</a></li>
                            <li><a href="#">Apple Arcade</a></li>
                            <li><a href="#">Apple Card</a></li>
                            <li><a href="#">iCloud</a></li>
                            <li><a href="#">Apple Music</a></li>
                            <li><a href="#">Apple News</a></li>
                            <li><a href="#">Apple TV+</a></li>
                            <li><a href="#">Apple Arcade</a></li>
                        </ul>
                        <h3>About Apple</h3>
                        <ul>
                            <li> <a href="#">Apple iPhone</a></li>
                            <li><a href="#">Genius Bar</a> </li>
                            
                        </ul>
                    </div>
                </div>
                
                    <div className="last-text">
                        More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE
                    </div>
                
                    <div className="last-last">
                        Copyright@2023 Apple Inc. All rights reserved. <ul className="lists">
                            <li ><a href="#">Privacy</a></li>
                            <li ><a href="#">Terms of Use</a></li>
                            <li ><a href="#">Sales and Refunds</a></li>
                            <li ><a href="#">Legal</a></li>
                            <li ><a href="#">Site Map</a></li>
                        </ul>
                        <div className="flag">
                                <img src={flag} alt="flag-of-US"/>
                        </div> <div className="country"><a href="#">United States</a>
                        </div>    
                    </div>
            
                
            </div> 
        </footer>
    </div>
  );
}

export default Footer
    
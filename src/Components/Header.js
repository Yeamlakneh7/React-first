import React from 'react'
import icon from "../images/icons/logo.png";
import logo from "../images/icons/search-icon.png";
import logo2 from "../images/icons/cart.png";

function Header() {
  return (
    <div>
      <header>
        <div className="links-and-icons">
            <div className="lists">
                <ul>
                    <li className="apple-icon"> <a href="#"><img src= {icon} alt='apple-icon'/></a>
                    </li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iphone</a></li>
                    <li><a href="#">ipad</a></li>
                    <li><a href="#">watch</a></li>
                    <li><a href="#">tv</a></li>
                    <li><a href="#">Music</a></li>
                    <li><a href="#">Support</a></li>
                    <li className="search-icon"><a href="#"><img src={logo} alt='search-icon'/> </a>
                    </li>
                    <li className="cart-icon"><a href="#"><img src={logo2} alt='cart-icon'/></a></li>
                </ul>
            </div>
        </div>
    </header>
    </div>
  );
}

export default Header

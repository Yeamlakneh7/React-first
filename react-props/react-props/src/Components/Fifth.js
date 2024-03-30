import React, { Component } from 'react'


export class Fifth extends Component {
  render() {
    return (
         <section className="for-all" id="section4">
        <div className={this.props.side}>
            <div className="logo">
                <img src={this.props.image1} alt=""/>
            </div>
         <div className="text">
            {this.props.text}
         </div>
         <div>
            <ul>
                <li><a href="#">Learn More</a></li>
                <li><a href="#">Buy</a></li>
            </ul>
        </div>
        </div>
     </section>
    )
  }
}

export default Fifth

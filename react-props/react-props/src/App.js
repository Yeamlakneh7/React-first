import {Component} from "react";
import Fifth from "./Components/Fifth";

class App extends Component {
  render() {
  return (
    <div className="section5">
  
        <Fifth side="left-side" image1="./images/icons/watch-series5-logo.png" text="With the new Always-On Retina display.
        You've never seen a watch like this."/>

        <Fifth side="right-side" image1="./images/icons/apple-card-logo.png" text="Get 3% Daily Cash on purchases from Apple using Apple Card" />
     
    </div>
  );
}
}
export default App;

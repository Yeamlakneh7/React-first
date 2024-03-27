import React, {Component} from "react";
import Header from "./Components/Header";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Last from "./Components/Last";

class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Last/>
      </header>
    </div>
  );
}
}

export default App;

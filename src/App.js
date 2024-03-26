import Header from "./Components/Header";
import Section1 from "./Components/Section1";
import Footer from "./Components/Footer";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section5 from "./Components/Section5";
import Section6 from "./Components/Section6";
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
       <Section1/>
       <Section2/>
       <Section3/>
       <Section4/>
       <Section5/>
       <Section6/>
       <Footer/>
       </header>
    </div>
  );
}

export default App;

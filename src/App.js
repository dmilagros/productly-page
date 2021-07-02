import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Feature from "./components/Feature";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navigation />
        <Header />
        <Feature />
      </div>
    </div>
  );
}

export default App;

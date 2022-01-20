import page1homepage from "./page-1-homepage.jpg";
import "./App.css";
import ScrollArrow from "./components/ScrollArrow";

function App() {
  return (
    <div className="App">
      <div>
        <img src={page1homepage} className="page-1-homepage" alt="homepage" />
      </div>

      <div className="">
        <ScrollArrow />
      </div>
    </div>
  );
}

export default App;

import Searchbar from "./components/Searchbar";
import ScrollArrow from "./components/ScrollArrow";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Searchbar />
      </header>
      <div className="">
        <ScrollArrow />
      </div>
    </div>
  );
}

export default App;

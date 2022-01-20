import page1homepage from "./page-1-homepage.jpg";
import Searchbar from "./components/Searchbar";
import ScrollArrow from "./components/ScrollArrow";
import Modal from "./components/Modal";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Searchbar />
      </header>
      <Modal />
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

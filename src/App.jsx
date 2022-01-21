import Searchbar from "./components/Searchbar";
import ScrollArrow from "./components/ScrollArrow";
import Modal from "./components/Modal";
import Page1homepage from "./Pages/Page1homepage";

import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6 from "./Pages/Page6";
import Page7 from "./Pages/Page7";
import Panier from "./Pages/Panier";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Searchbar />
      </header>

      <Modal />
      <div className="">
        <Router>
          <Routes>
            <Route exact path="/" element={<Page1homepage />} />
            <Route path="/page2" element={<Page2 />}>
              {" "}
            </Route>
            <Route path="/page3" element={<Page3 />}>
              {" "}
            </Route>
            <Route path="/page4" element={<Page4 />}>
              {" "}
            </Route>
            <Route path="/page5" element={<Page5 />}>
              {" "}
            </Route>
            <Route path="/page6" element={<Page6 />}>
              {" "}
            </Route>
            <Route path="/page7" element={<Page7 />}>
              {" "}
            </Route>
            <Route path="/Panier" element={<Panier />}>
            {" "}
          </Route>
          </Routes>
        </Router>
        <div className="div-scroll-top">
          <ScrollArrow />
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import page3 from "../page-3.jpg";
import Page4 from "./Page4";
import { Link } from "react-router-dom";

const Page3 = () => {
  return (
    <div>
      <Link to="/page4" element={<Page4 />}>
        <button className="button-page-3"> ToPage4</button>
      </Link>
      <img src={page3} className="page-3" alt="page3" />
    </div>
  );
};

export default Page3;

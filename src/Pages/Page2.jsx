import React from "react";
import page2 from "../page-2.jpg";
import Page3 from "./Page3";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div>
      <Link to="/page3" element={<Page3 />}>
        <img src={page2} className="page-2" alt="page2" />
      </Link>
    </div>
  );
};

export default Page2;

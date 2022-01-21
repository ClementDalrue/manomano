import React from 'react';
import page4 from "../page-4.jpg";
import Page5 from "./Page5";
import { Link } from "react-router-dom";

const Page4 = () => {
  return (
    <div>
      <Link to="/page5" element={<Page5 />}>
        <button className="button-page-4"> ToPage5</button>
      </Link>
      <img src={page4} className="page-4" alt="page4" />
    </div>
  );
};

export default Page4;
import React from 'react';
import page5 from "../page-5.jpg";
import Page6 from "./Page6";
import { Link } from "react-router-dom";

const Page5 = () => {
  return (
    <div>
      <Link to="/page6" element={<Page6 />}>
        <button className="button-page-5"> ToPage6</button>
      </Link>
      <img src={page5} className="page-5" alt="page5" />
    </div>
  );
};

export default Page5;
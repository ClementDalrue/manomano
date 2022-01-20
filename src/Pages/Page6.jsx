import React from 'react';
import page6 from "../page-6.jpg";
import Page7 from "./Page6";
import { Link } from "react-router-dom";

const Page6 = () => {
  return (
    <div>
      <Link to="/page7" element={<Page7 />}>
        <button className="button-page-6"> ToPage7</button>
      </Link>
      <img src={page6} className="page-6" alt="page6" />
    </div>
  );
};

export default Page6;
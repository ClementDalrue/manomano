import React from 'react';
import page5 from "../page-5.jpg";
import Page6 from "./Page6";
import { Link } from "react-router-dom";

const Page5 = () => {
  return (
    <div>
       <Link to="/page6" element={<Page6 />}>
      <img src={page5} className="page-5" alt="page5" />
      </Link>
    </div>
  );
};

export default Page5;
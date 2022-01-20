import React from 'react';
import page1homepage from "../page-1-homepage.jpg";
import Page2 from './Page2';
import { Link } from 'react-router-dom';

const Page1homepage = () => {
  return (
    <div>
      <div>

      <Link to="page2" element={Page2}>
      <button className="button-page-1"> NextPage</button>
      </Link>
      </div>
      
      <img src={page1homepage} className="page-1-homepage" alt="homepage" />
      
    </div>
  );
};

export default Page1homepage;
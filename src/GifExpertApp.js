import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import 'animate.css';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Piece"]);

  return (
    <>

      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
      
    </>
  );
};

export default GifExpertApp;

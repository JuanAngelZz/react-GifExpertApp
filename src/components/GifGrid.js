import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
import 'animate.css';

const GifGrid = ({ category }) => {

  const { data:images, loading } = useFetchGifs( category )

  return (
    <>

      <h3>{category}</h3>

      { loading && <p className="animate__animated animate__flash">Loading...</p> }

      <div className="card-grid animate__animated animate__fadeIn">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>

    </>
  );

};

export default GifGrid;

import React from "react";
import "./styles.css";

export default function Planet(props) {
   const {
     id,
     name,
     liked,
     handleLike
   } = props;

  return (
    <>
        <div className="txt">Planet Name: {name}</div>
        <div className="id">Planet ID: {id}</div>
        <button onClick={() => handleLike(id)}>{liked} Add to Favourite</button>
   </>
  );
}

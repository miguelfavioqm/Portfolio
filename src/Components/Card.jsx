import React from "react";
import imagen from "../assets/imagen.png";
const Card = ({ img, title, descripcion, items, link }) => {
  return (
    <>
      <div className="card max-w-sm h-1/2 flex flex-col justify-center items-center">
        <img src={img} className="card-img-top w-28" alt="" />
        <div className="card-body">
          <h5 className="card-title font-semibold">{title}</h5>
          <p>{items}</p>
          <p className="card-text">{descripcion}</p>
          <a href={link} className="btn btn-dark mt-1" target="_blank">
            VISITAR
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;

import React from "react";

import imgOne from "../Assets/avataaars.svg";

export default function Start() {
  return (
    <div className="start-page d-flex flex-column  justify-content-center align-items-center pt-5 ">
      <img src={imgOne} className="start-image pt-5 mt-5 " alt="" />
      <h1 className="text-white fw-bolder my-4 pt-3  ">START FRAMEWORK</h1>
      <div className="start-star d-flex justify-content-center  align-items-center  ">
        <div className="star mx-4 "></div>
        <i className="fa-solid fa-star text-white "></i>
        <div className="star mx-4 "></div>
      </div>
      <p className="text-white py-4  ">
        Graphic Artist - Web Designer - Illustrator
      </p>
    </div>
  );
}

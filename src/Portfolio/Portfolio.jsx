import React from "react";
// import $ from "jquery";
import imOne from "../Assets/poert1.png";
import imTwo from "../Assets/port2.png";
import imThree from "../Assets/port3.png";

export default function Portfolio() {

  // $(".col-4").on("click", function (e) {
  //   console.log(e.target);
  // });
  
  return (
    <div className="portfolio-section py-3">
      <div className="main-image w-50">
      <img src="" alt="" />
      </div>
      <div className="portfolio-title pt-5 mt-4  d-flex flex-column  justify-content-center  align-items-center">
        <h1 className="fw-bold pt-5  ">PORTFOLIO COMPONENT</h1>
        <div className="d-flex justify-content-center  align-items-center py-3 ">
          <div className="contact-star mx-4  "></div>
          <i className="fa-solid fa-star star-color"></i>
          <div className="contact-star mx-4 "></div>
        </div>
      </div>
      <div className="container py-2 ">
        <div className="row g-5 ">
          <div className="col-md-6   col-lg-4    ">
            <div className="portfolio-item overflow-hidden position-relative  ">
              <img src={imOne} className=" w-100 rounded-2  " alt="" />
              <div className="image-layer rounded-2 position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center  align-items-center  ">
                <i className="fa-solid fa-plus text-white display-1  fw-bolder  "></i>
              </div>
            </div>
          </div>
          <div className="col-md-6   col-lg-4   ">
            <div className="portfolio-item overflow-hidden position-relative  ">
              <img src={imTwo} className=" w-100  rounded-2  " alt="" />
              <div className="image-layer rounded-2 position-absolute start-0  top-0  w-100  h-100 d-flex justify-content-center  align-items-center  ">
                <i className="fa-solid fa-plus text-white display-1  fw-bolder  "></i>
              </div>
            </div>
          </div>
          <div className="col-md-6   col-lg-4  ">
            <div className="portfolio-item overflow-hidden position-relative  ">
              <img src={imThree} className=" w-100  rounded-2  " alt="" />
              <div className="image-layer rounded-2 position-absolute start-0  top-0  w-100  h-100 d-flex justify-content-center  align-items-center  ">
                <i className="fa-solid fa-plus text-white display-1  fw-bolder  "></i>
              </div>
            </div>
          </div>
          <div className="col-md-6   col-lg-4  ">
            <div className="portfolio-item overflow-hidden position-relative  ">
              <img src={imOne} className=" w-100  rounded-2  " alt="" />
              <div className="image-layer rounded-2 position-absolute start-0  top-0  w-100  h-100 d-flex justify-content-center  align-items-center  ">
                <i className="fa-solid fa-plus text-white display-1  fw-bolder  "></i>
              </div>
            </div>
          </div>
          <div className="col-md-6   col-lg-4   ">
            <div className="portfolio-item overflow-hidden position-relative  ">
              <img src={imTwo} className=" w-100  rounded-2  " alt="" />
              <div className="image-layer rounded-2 position-absolute start-0  top-0  w-100  h-100 d-flex justify-content-center  align-items-center  ">
                <i className="fa-solid fa-plus text-white display-1  fw-bolder  "></i>
              </div>
            </div>
          </div>
          <div className="col-md-6   col-lg-4   ">
            <div className="portfolio-item overflow-hidden position-relative  ">
              <img src={imThree} className=" w-100  rounded-2  " alt="" />
              <div className="image-layer rounded-2 position-absolute start-0  top-0  w-100  h-100 d-flex justify-content-center  align-items-center  ">
                <i className="fa-solid fa-plus text-white display-1  fw-bolder  "></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

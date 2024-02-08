import React from "react";

export default function About() {
  return (
    <div className="about-section py-5 text-white  ">
      <div className="container my-5 py-5 d-flex  flex-column  justify-content-center  align-items-center ">
        <h1 className=" pt-5 mt-5 fw-bold mb-0 ">ABOUT COMPONENT</h1>
        <div className="start-star d-flex justify-content-center  align-items-center py-4 ">
          <div className="star mx-4  "></div>
          <i className="fa-solid fa-star text-white "></i>
          <div className="star mx-4 "></div>
        </div>
        <div className="about-title row mx-5  mb-md-4 ">
          <div className="col-md-6  ">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="col-md-6 py-sm-3 py-md-0  ">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

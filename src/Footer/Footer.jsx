import React from "react";
export default function Footer() {
  return (
    <>
      <footer className="py-5 ">
        <div className="container text-center py-5 ">
          <div className="row ">
            <div className=" col-sm-4   ">
              <h3 className="fw-medium  ">LOCATION</h3>
              <p className="fw-semibold ">2215 John Daniel Drive</p>
              <p className="fw-semibold ">Clark, MO 65243</p>
            </div>
            <div className=" col-sm-4 ">
              <h3 className="fw-medium ">AROUND THE WEB</h3>
              <div className="icons d-flex  justify-content-center  align-items-center ">
                <div className="icon-item mx-1 d-flex justify-content-center  align-items-center  ">
                  <i className="fa-brands fa-facebook "></i>
                </div>
                <div className="icon-item mx-1 d-flex justify-content-center  align-items-center  ">
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="icon-item mx-1 d-flex justify-content-center  align-items-center  ">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
                <div className="icon-item mx-1 d-flex justify-content-center  align-items-center  ">
                  <i className="fa-solid fa-globe"></i>
                </div>
              </div>
            </div>
            <div className=" col-sm-4 ">
              <h3 className="fw-medium ">ABOUT FREELANCER</h3>
              <p className="fw-semibold    ">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="endOfFooter text-white  text-center  py-3  ">
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}

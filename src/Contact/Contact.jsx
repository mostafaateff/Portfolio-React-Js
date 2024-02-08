import React from "react";

export default function Contact() {
    return (
      <div className=" contact-section pt-5  ">
        <div className="contact-title py-5 d-flex flex-column  justify-content-center  align-items-center ">
          <h1 className="pt-4 fw-bold ">CONATCT SECTION</h1>
          <div className=" d-flex justify-content-center  align-items-center py-3 ">
            <div className="contact-star mx-4  "></div>
            <i className="fa-solid fa-star star-color"></i>
            <div className="contact-star mx-4 "></div>
          </div>
        </div>
        <form className="form  py-3 mb-1 w-50 m-auto">
          <span className="input-span my-1">
            <input type="text" placeholder="userName" />
          </span>
          <span className="input-span my-1">
            <input type="number" placeholder="userAge" />
          </span>
          <span className="input-span my-1">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="userEmail"
            />
          </span>
          <span className="input-span my-1">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="userPassword"
            />
          </span>
          <input className="submit fs-5 " type="submit" value="send Message" />
        </form>
      </div>
    );
}

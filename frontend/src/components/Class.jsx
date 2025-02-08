import React from "react";
import { Link } from "react-router-dom";

function Class(props) {
  const handlePresent = (e) => {};

  //present-bg-green-500 absent-bg-red-500
  return (
    <>
      <div className="bg-white container flex w-[80%] h-[14%] rounded-2xl ">
        <div className="p-5 w-screen">
          <div
            id="left up "
            className="w-[70%] text-black font-extrabold poppins-bold"
          >
            {props.code}
            {" : "}
            <span className="items-center justify-center font-normal">
              {" "}
              {props.name}
            </span>
          </div>
          <Link
            to="https://forms.gle/R9Fin8Tc27xV95qE9"
            id="left down"
            className="underline cursor-pointer text-red-700"
          >
            Ask your doubt
          </Link>
        </div>

        <div
          id="right"
          className={` w-[20%] ${handlePresent} rounded-r-2xl`}
        ></div>
      </div>
    </>
  );
}

export default Class;

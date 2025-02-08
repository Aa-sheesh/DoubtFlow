{/* TODO: 
  1. doubt handler
  2. dynamic absent/present status
  3. ask doubt button
  4. raise query for absent button
*/}
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";

function Timetable() {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;
  return (
    <>
      <Navbar />
      <>
        <div className="h-[80vh] flex justify-center items-center flex-wrap">
          <div
            title="Date"
            className="text-white container w-screen flex justify-center"
          >
            <button className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
              >
                <path d="M655-80 255-480l400-400 56 57-343 343 343 343-56 57Z" />
              </svg>
            </button>
            <div className="pl-2 pr-2">{formattedToday}</div>
            <button className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
              >
                <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" />
              </svg>
            </button>
          </div>
          <div className="bg-white container flex w-[80%] h-[14%] rounded-2xl ">
            <div className="p-5 w-screen">
              <div
                id="left up "
                className="w-[70%] text-black font-extrabold poppins-bold"
              >
                CV 2001
              </div>
              <div
                id="left down"
                className="underline cursor-pointer text-red-700"
              >
                Ask your doubt
              </div>
            </div>

            <div
              id="right"
              className="bg-green-500 w-[20%] text-green-500 rounded-r-2xl"
            >
              Present
            </div>
          </div>
          <div className="bg-white container flex w-[80%] h-[14%] rounded-2xl ">
            <div className="p-5 w-screen">
              <div
                id="left up "
                className="w-[70%] text-black font-extrabold poppins-bold"
              >
                CV 2001
              </div>
              <div
                id="left down"
                className="underline cursor-pointer text-red-700"
              >
                Ask your doubt
              </div>
            </div>


            <button
              id="right"
              className="bg-red-500 w-[20%] text-red-500 rounded-r-2xl flex justify-center items-center"
              title="Raise Query"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="50px"
                viewBox="0 -960 960 960"
                width="50px"
                fill="#FFFFFF"
                
                className="cursor-pointer"
              >
                <path d="M484-247q16 0 27-11t11-27q0-16-11-27t-27-11q-16 0-27 11t-11 27q0 16 11 27t27 11Zm-35-146h59q0-26 6.5-47.5T555-490q31-26 44-51t13-55q0-53-34.5-85T486-713q-49 0-86.5 24.5T345-621l53 20q11-28 33-43.5t52-15.5q34 0 55 18.5t21 47.5q0 22-13 41.5T508-512q-30 26-44.5 51.5T449-393Zm31 313q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Z" />
              </svg>
            </button>
          </div>
        </div>
      </>
      <Footer />
    </>
  );
}

export default Timetable;

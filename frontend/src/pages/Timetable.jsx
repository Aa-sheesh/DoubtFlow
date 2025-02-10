{
  /* TODO: 
  2. dynamic absent/present status
  5. dynamic timetable
  6. dynamic date
  7. dynamic class code and name
  
  */
}
import { Link } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";
import Class from "../components/Class";
import { useTimetableStore } from "../stores/useTimetableStore";
import { useUserStore } from "../stores/useUserStore";

function Timetable() {
  const today = new Date();
  const day = today.getDay(); // Returns a number (0 for Sunday, 1 for Monday, etc.)

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const user = useUserStore.getState().user;
  const branch = user.branch;
  const section = user.section;
  // getTimetable(user.branch,user.section);
  const { getTimetable } = useTimetableStore();
  getTimetable(branch, section);
  

  const date = new Date();
  const dateToday = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const fullDate = `${dateToday}/${month}/${year}`;

  return (
    <>
      <Navbar />
      <>
        <div className="h-[80vh] flex justify-center items-center flex-wrap">
          <div
            title="Date"
            className="text-white container w-screen flex justify-center"
          >
            <div className="pl-2 text-2xl pr-2">
              {fullDate}
              <br />
              <span className="flex justify-center">{daysOfWeek[day]}</span>
            </div>
          </div>

          <div className="bg-white container flex w-[80%] h-[14%] rounded-2xl ">
            <div className="p-5 w-screen">
              <div
                id="left up "
                className="w-[70%] text-black font-extrabold poppins-bold"
              >
                
              </div>
              <div
                id="left down"
                className="underline cursor-pointer  text-red-700"
              >
                Ask your doubt
              </div>
            </div>

            <Link
              to="https://forms.gle/QckaEckbtsHewgnc6"
              id="right"
              className="bg-red-500 w-[20%] // text-red-500 rounded-r-2xl flex justify-center items-center"
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
            </Link>
          </div>
        </div>
      </>
      <Footer />
    </>
  );
}

export default Timetable;

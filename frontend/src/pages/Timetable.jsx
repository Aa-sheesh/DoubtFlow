{
  /* TODO: 
  2. dynamic absent/present status
  5. dynamic timetable
  6. dynamic date
  7. dynamic class code and name
  
  */
}
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";
import Class from "../components/Class";
import { useTimetableStore } from "../stores/useTimetableStore";
import { useUserStore } from "../stores/useUserStore";

function Timetable() {
  const today = new Date();
  const day = today.getDay(); // Returns a number (0 for Sunday, 1 for Monday, etc.)

  const codes=["BB0026","CS3201","CS3202","CS3203","CS3240/3241/3242","CS3230","CS3231"]
  const code = codes[day];

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
  const { getTimetable, timetable, timeslots } = useTimetableStore();
  useEffect(() => {
    getTimetable(branch, section);
  }, [branch, section, getTimetable]);
  // console.log(timetable,timeslots);
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
          <Class code={code} name={timetable[0]} color="green" />
          <Class code={code} name={timetable[1]} color="green" />
          <Class code={code} name={timetable[3]} color="green" />
          <Class code={code} name={timetable[2]} color="red" />
          {/* <Class code={code} name={timetable[4]} color="red" /> */}
        </div>
      </>
      <Footer />
    </>
  );
}

export default Timetable;

import React from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
const Navbar = () => {
  const { user,logout } = useUserStore();
  const loggedIn = true;
  const handleLogout=(e)=>{
    logout();
  }
  
  return (
    <div>
      <div className="text-white font-semibold p-5 flex justify-between items-center">
        <Link to="/">
          <span className="text-3xl pl-3">DoubtFlow🤔</span>
        </Link>
        {!user ? (
          <Link to="/login">
            <button title="Login" className="pr-5 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="36px"
                viewBox="0 -960 960 960"
                width="36px"
                fill="#FFFF55"
              >
                <path d="M481-120v-60h299v-600H481v-60h299q24 0 42 18t18 42v600q0 24-18 42t-42 18H481Zm-55-185-43-43 102-102H120v-60h363L381-612l43-43 176 176-174 174Z" />
              </svg>
            </button>
          </Link>
        ) : (
          <>
            <Link to="/timetable">
              <button title="Timetable" className="pr-38 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="38px"
                  viewBox="0 -960 960 960"
                  width="38px"
                  fill="#FFFF55"
                >
                  <path d="M180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600v-430H180v430Zm0-490h600v-130H180v130Zm0 0v-130 130Zm300 230q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
                </svg>
              </button>
            </Link>
            <Link to="/">
              <button title="Logout" onClick={handleLogout} className="pr-5 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="36px"
                  viewBox="0 -960 960 960"
                  width="48px"
                  fill="#FFFF55"
                >
                  <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h299v60H180v600h299v60H180Zm486-185-43-43 102-102H360v-60h363L621-612l43-43 176 176-174 174Z" />
                </svg>
              </button>
            </Link>

          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

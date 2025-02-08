import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const loggedIn=true;
  return (
    <div>
      <div className="text-white font-semibold p-5 flex justify-between items-center">
        <Link to="/">
          <span className="text-3xl pl-3">DoubtFlow🤔</span>
        </Link>
        {loggedIn?
        (<Link to="/login">
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
        </Link>):(
            <Link to="/logout">
            <button title="Logout" className="pr-5 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="48px" fill="#FFFF55"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h299v60H180v600h299v60H180Zm486-185-43-43 102-102H360v-60h363L621-612l43-43 176 176-174 174Z"/></svg>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link, redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useUserStore } from "../stores/useUserStore";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUserStore();
  const { user } = useUserStore();

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(email,password);
    login(email, password);
  };

  return (
    <>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center h-[80vh] text-white"
      >
        <input
          type="email"
          requiredvalue={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="xyz.123@muj.manipal.edu"
          className="border-2 placeholder-amber-50 border-white p-2 m-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-white placeholder-amber-50 p-2 m-2"
        />
        <button
          type="submit"
          className="border-2 border-white hover:bg-green-800 py-2 px-3 rounded-xl bg-green-500 m-2"
        >
          Login
        </button>
        <span>Don't have an account?</span>
        <Link to="https://linktr.ee/aa_sheesh">
          <span className="text-blue-600">Contact here</span>
        </Link>
      </form>
      <Footer />
    </>
  );
}

export default Login;

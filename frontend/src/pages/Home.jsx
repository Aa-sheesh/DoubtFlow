import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className=" h-[80vh] flex">
        <div className="text-[#D9D9D9] text-[24px] flex justify-center items-center p-50">
          What is DoubtFlow? <br />
          DoubtFlow is a web app by Team Bytes designed to help students at
          Manipal University Jaipur easily ask doubts and raise queries related
          to classes. Our goal is to simplify everyday challenges and provide
          efficient solutions. Stay tuned for more updates!
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

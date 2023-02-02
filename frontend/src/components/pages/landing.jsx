import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-wrap gap-2 h-full justify-between items-center">
      <img
        className="w-7/12"
        src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <div className="flex flex-col justify-center align-center gap-3">
        <p className="max-w-sm text-center leading-8 text-lg">
          Get stock prices for different businesses. Make informed and accurate
          business decision. Get accurate stock price redictions
        </p>
        <button
          onClick={() => navigate("/register")}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto"
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default Landing;

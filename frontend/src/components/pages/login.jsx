import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-3/6 flex justify-center border border-black rounded mt-3 mx-auto ">
      <div className="w-full px-6 pt-4">
        <h1 className="mt-2 font-bold text-lg">Login</h1>
        <form className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pass"
            >
              Password
            </label>
            <input
              id="pass"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Register
            </button>
          </div>
          <p className="text-sm text-gray-500 text-center mb-3">
            Don't have an account?{" "}
            <Link className="text-blue-500 underline" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_medium.jpg"
          alt="logo"
        />
      </div>
      <form className="w-[33%] absolute p-8 bg-black my-16 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-800 bg-opacity-50 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800 bg-opacity-50 rounded-lg"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
          Sign In
        </button>
        <p className="py-4">New to Netflix? Sign Up Now</p>
      </form>
    </div>
  );
};

export default Login;

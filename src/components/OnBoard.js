import React from "react";
import { Link } from "react-router-dom";

const OnBoard = () => {
  return (
    <div className="items-center justify-center w-full h-full" >
      <div className="w-[300px] rounded-md border mx-auto mt-4 hover:shadow-lg hover:shadow-sky-200 ">
        <img
          src="https://cdn1.iconfinder.com/data/icons/marketing-19/100/Profile-512.png"
          alt="avatar"
          className="object-cover w-[250px] m-auto  hover:bg-blue-50 rounded-full"
        />
        <div className="flex flex-col p-4 ">
          <Link
            to="/login"
            className="mt-4 w-full rounded-md text-center bg-blue-500 px-2 py-2 text-[20px] font-semibold text-black shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="w-full px-2 py-2 mt-4 font-semibold text-center text-black bg-green-500 rounded-md shadow-sm text-[20px] hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnBoard;

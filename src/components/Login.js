import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  let history = useNavigate();
  const [details, setDetails] = useState({ email: "", password: "" });

  const OnChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const url = "https://cloudynote-api.vercel.app/api/auth/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: details.email,
        password: details.password,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      //redirect and save token
      localStorage.setItem("token", json.authToken);
      history("/");
      props.showAlert("Successfully Loged in", "blue");
    } else {
      props.showAlert("Login failed", "red");
    }
  };

  return (
    <section>
      <div className="grid grid-cols-1 m-3 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Login
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-blue-800 transition-all duration-200 hover:underline"
              >
                Create a free account
              </Link>
            </p>
            <form
              action="#"
              method="POST"
              onSubmit={handelSubmit}
              className="mt-8"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      name="email"
                      value={details.email}
                      onChange={OnChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                      name="password"
                      value={details.password}
                      onChange={OnChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-sky-500 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-sky-600"
                  >
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full h-full">
          <img
            className="object-cover w-full h-full mx-auto rounded-md "
            src="https://previews.123rf.com/images/surfupvector/surfupvector2007/surfupvector200700651/151493164-girl-writing-in-journal-or-diary-isolated-flat-vector-illustration-cartoon-female-teenager-drawing.jpg"
            alt="Make your note Safe"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;

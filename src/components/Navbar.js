import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "/about", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  let location = useLocation();
  const history = useNavigate()
  const handelLogout=()=>{
    localStorage.removeItem("token")
   history('/login')
  }
  return (
    <>
      <Disclosure as="nav" className="bg-sky-800">
        {({ open }) => (
          <>
            <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-sky-400 hover:bg-sky-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                  <div className="flex items-center flex-shrink-0">
                    <h2 className="items-center block w-auto p-2 text-lg font-bold border-2 rounded-lg bg-sky-300 lg:hidden border-sky-950">
                      CloudyNote
                    </h2>
                    <h2 className="items-center hidden w-auto p-2 text-lg font-bold border-2 rounded-lg bg-sky-300 lg:block border-sky-950">
                      CloudyNote
                    </h2>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 justify-items-center">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            location.pathname === item.href
                              ? "bg-sky-900 text-white"
                              : "text-sky-300 hover:bg-sky-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                {!localStorage.getItem("token") ? (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <Link
                      to="/login"
                      className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white transition-all duration-150 ease-linear rounded shadow outline-none bg-sky-500 active:bg-sky-600 hover:shadow-md focus:outline-none"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white transition-all duration-150 ease-linear rounded shadow outline-none bg-sky-500 active:bg-sky-600 hover:shadow-md focus:outline-none"
                    >
                      Signup
                    </Link>
                  </div>
                ) : (
                  <> <button
                  onClick={handelLogout}
                  className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white transition-all duration-150 ease-linear rounded shadow outline-none bg-sky-500 active:bg-sky-600 hover:shadow-md focus:outline-none"
                  >LogOut</button> </>
                )}
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    as="a"
                    to={item.href}
                    className={classNames(
                      location.pathname === item.href
                        ? "bg-sky-900 text-white"
                        : "text-sky-300 hover:bg-sky-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default Navbar;

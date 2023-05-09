import React from "react";

const Alert = (props) => {
  return (
    <>
      <div
        className={`p-4 bg-blue-100 border-l-4 max-w-full justify-between flex border-red-500 rounded-md`}
      >
        <div className="flex items-center space-x-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-red-600"
              viewBox="0 0 512 512"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
          </div>
          <div className="">
            <p className={`text-sm font-medium text-blue-600`}>
              {props.alert.massage}
            </p>
          </div>
          <button>
            <svg
              fill="#000000"
              viewBox="0 0 32 32"
              className={`w-6 h-6 text-${props.alert.type}-600 cursor-pointer`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Alert;

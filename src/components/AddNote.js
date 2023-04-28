import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "gh", description: "hv", tag: "nn," });
  const OnChange = (e) => {
    e.preventDefault();
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handelOnClick = (note) => {
    addNote(note.title,note.description,note.tag)
    
  };
  return (
    <div className="flex flex-col  justify-center md:w-[600px] sm:w-[400px]  mt-10 bg-sky-50 p-6 border border-green-500 rounded-sm shadow-xl shadow-sky-200 hover:shadow-sky-300 mx-auto sm:mx-4  ">
      <p className="mb-10 text-xl font-bold text-black ">Add a Note</p>
      <div className="sm:col-span-3">
        <label
          htmlFor="title"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          title
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="title"
            id="title"
            autoComplete="title"
            onChange={OnChange}
            className="block px-2 w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-md sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label
          htmlFor="description"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          description
        </label>
        <div className="w-full mt-2">
          <input
            type="text"
            name="description"
            id="description"
            onChange={OnChange}
            className="block w-full px-2  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-4">
        <label
          htmlFor="tag"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          tag
        </label>
        <div className="mt-2">
          <input
            id="tag"
            name="tag"
            type="text"
            onChange={OnChange}
            className="block w-full px-2  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="mt-3 sm:col-span-4">
        <button
          onClick={handelOnClick}
          className="rounded-md bg-sky-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-sky-500"
        >
          Add note
        </button>
      </div>
    </div>
  );
};

export default AddNote;

import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  let history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      history("/onboard");
    }
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };
  const ref = useRef(null);
  const OnChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handelOnClick = (e) => {
    setShowModal(false);
    // e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    props.showAlert("Updated Succefully", "blue");
  };
  return (
    <>
      {localStorage.getItem("token") ? <AddNote /> : <></>}

      <div className="flex flex-col justify-center mx-auto mt-4 ">
        <>
          <button
            className="hidden px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none"
            type="button"
            onClick={() => setShowModal(true)}
            ref={ref}
          >
            Open small modal
          </button>
          {showModal ? (
            <>
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div className="relative w-auto max-w-sm mx-auto my-6">
                  <div className="relative flex flex-col w-full border-0 rounded-lg shadow-lg outline-none bg-sky-50 focus:outline-none">
                    <div className="px-6 py-2 mb-1 mr-1 ">
                      <p className="mb-4 text-xl font-bold text-black ">
                        Edit the Note
                      </p>

                      <div className="px-6 py-2 mb-1 mr-1 sm:col-span-3">
                        <label
                          htmlFor="etitle"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          title
                        </label>
                        <div className="w-full mt-2 ">
                          <input
                            type="text"
                            name="etitle"
                            id="etitle"
                            required
                            autoComplete="etitle"
                            value={note.etitle}
                            onChange={OnChange}
                            className="block px-2 w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-md sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="px-6 py-2 mb-1 mr-1 sm:col-span-3 ">
                        <label
                          htmlFor="edescription"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          description
                        </label>
                        <div className="w-full mt-2">
                          <input
                            type="text"
                            name="edescription"
                            id="edescription"
                            required
                            value={note.edescription}
                            onChange={OnChange}
                            className="block w-full px-2  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="px-6 py-2 mb-1 mr-1 sm:col-span-4">
                        <label
                          htmlFor="etag"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          tag
                        </label>
                        <div className="mt-2">
                          <input
                            id="etag"
                            name="etag"
                            type="text"
                            onChange={OnChange}
                            value={note.etag}
                            required
                            className="block w-full px-2  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>

                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                      <button
                        className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white transition-all duration-150 ease-linear rounded shadow outline-none bg-sky-500 active:bg-sky-600 hover:shadow-md focus:outline-none"
                        type="button"
                        onClick={handelOnClick}
                        disabled={
                          note.etitle.length < 1 ||
                          note.edescription.length < 1 ||
                          note.etag.length < 1
                        }
                      >
                        Save Note
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </>

        <h2 className="mx-auto text-4xl font-semibold text-black ">
          Your Notes
        </h2>
        <div className="mx-auto mt-4 text-2xl font-thin text-black ">
          {notes.length === 0 && "No Notes to display !!"}
        </div>
        <div className="grid grid-cols-1 gap-5 lg:w-[80vw] sm:w-[100vw] p-10 mx-auto sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {notes.map((note) => {
            return (
              <NoteItem key={note._id} updateNote={updateNote} note={note} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;

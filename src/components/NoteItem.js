import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note,updateNote } = props;
  return (
    <>
      <div className="overflow-hidden rounded shadow-md shadow-sky-200 hover:shadow-lg hover:shadow-sky-300 dark:shadow-sky-600">
        <div className="px-6 py-2 pt-4">
          <div className="flex justify-between mb-2 text-xl font-bold">
            {note.title}
            <button className="ml-4" onClick={()=> updateNote(note)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 p-1 rounded hover:bg-green-600 hover:shadow-sm hover:shadow-green-600"
                viewBox="0 0 448 512"
              >
                <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
              </svg>
            </button>
          </div>
          <p className="text-base text-gray-700 dark:text-gray-300">
            {note.description}
          </p>
        </div>
        <div className="flex justify-between px-6 pt-2 pb-2 ">
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 rounded-full bg-sky-200 dark:bg-sky-800 dark:text-gray-200">
            {note.tag}
          </span>
          <div>
            <button className="ml-2 " onClick={() => deleteNote(note._id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 p-1 rounded hover:bg-red-600 hover:shadow-sm hover:shadow-red-600"
                viewBox="0 0 512 512"
              >
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;

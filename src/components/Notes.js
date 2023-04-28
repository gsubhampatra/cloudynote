import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes } = context;
  return (
    <>
      <AddNote />
      <div className="flex flex-col justify-center mx-auto mt-4 ">
        <h2 className="mx-auto text-4xl font-semibold text-black ">
          Your Notes
        </h2>
        <div className="grid grid-cols-1 gap-5 lg:w-[80vw] sm:w-[100vw] p-10 mx-auto sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {notes.map((note) => {
            return <NoteItem key={note._id} note={note} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;

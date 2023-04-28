import React, { useState } from "react";

import NoteContext from "./noteContext";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "64384960aa4ddss6a707427846d5",
      user: "643847ccaa46a707427846d2",
      title: "first Note",
      description: "this is a description for first note",
      tag: "social",
      date: "2023-04-13T18:26:40.908Z",
      __v: 0,
    },
    {
      _id: "64384d960aa46a707427846d5",
      user: "643847ccaa46a707427846d2",
      title: "first Note",
      description: "this is a description for first note",
      tag: "social",
      date: "2023-04-13T18:26:40.908Z",
      __v: 0,
    },
    {
      _id: "64384960aaff46a707427846d5",
      user: "643847ccaa46a707427846d2",
      title: "first Note",
      description: "this is a description for first note",
      tag: "social",
      date: "2023-04-13T18:26:40.908Z",
      __v: 0,
    },
    {
      _id: "64384960aa46a707ff427846d5",
      user: "643847ccaa46a707427846d2",
      title: "first Note",
      description: "this is a description for first note",
      tag: "social",
      date: "2023-04-13T18:26:40.908Z",
      __v: 0,
    },
    {
      _id: "643849rr60aa46a707427846d5",
      user: "643847ccaa46a707427846d2",
      title: "first Note",
      description: "this is a description for first note",
      tag: "social",
      date: "2023-04-13T18:26:40.908Z",
      __v: 0,
    },
    {
      _id: "6438496ii0aa46a707427846d5",
      user: "643847ccaa46a707427846d2",
      title: "first Note",
      description: "this is a description for first note",
      tag: "social",
      date: "2023-04-13T18:26:40.908Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(initialNotes);

  //add note
  const addNote = (title,description,tag) => {
  const note = {
    _id: "6438496ii0aa46a7074278546d5",
    user: "643847ccaa46a7407427846d2",
    title: title,
    description: description,
    tag: tag,
    date: "2023-04-13T18:26:40.908Z",
    __v: 0,
  }
   setNotes(notes.concat(note))
  };
  //edit nate
  const deleteNote = (id) => {

  };
  //delete note

  const editNote = (id) => {

  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

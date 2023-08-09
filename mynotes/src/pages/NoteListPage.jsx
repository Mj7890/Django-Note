import React, { useEffect, useState } from "react";
import ListItem from "../components/ListItem";
import AddNote from "../components/AddButton"


const NoteListPage = () => {
  let [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes();
  }, []);
  let getNotes = async () => {
    let response = await fetch("/api/notes/");
    let data = await response.json();
    console.log("Data", data);
    setNotes(data);
  };  
  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782;</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      
      <div className="notes-list">
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
      <AddNote/>
    </div>
  );
};

export default NoteListPage;

import React, { useEffect, useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import { ReactComponent as ArrowLeft} from "../assets/arrow-left.svg";
import {Link} from "react-router-dom"


const NotePage = ({ history }) => {
  const {id } = useParams();
  const navigate = useNavigate();

  let [note, setNote] = useState(null);
  console.log(note);


  useEffect(() => {
    getNote();
  }, [id]);

  let getNote = async () => {
    if (id === "new")
    return
    let response = await fetch(`/api/notes/${id}`);
    let data = await response.json();
    console.log(data);
    setNote(data);
  };
  // Create Note API
  const createNote = async () => {
    try {
      const response = await fetch(`/api/notes/create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
      });
      if (response.ok) {
        navigate("/");
      } else {
        console.error("Failed to create note:", response.status);
      }
    } catch (error) {
      console.error("Error while creating note:", error);
    }
  };
  
  let updateNote = async ()=>{

   fetch(`/api/notes/${id}/update/`, {
      method:"PUT",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(note)

     })
     
  }
  const deleteNote = async () => {
    try {
      const response = await fetch(`/api/notes/${id}/delete/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        navigate("/");
      } else {
        console.error("Failed to delete note:", response.status);
      }
    } catch (error) {
      console.error("Error while deleting note:", error);
    }
  };
  let handleSubmit = ()=>{
    if (id !== "new" && !note.body){
      deleteNote()
    }else if( id !=='new'){
      updateNote()
    }else if(id == "new" && note !==null){
      createNote()
    }
    navigate('/');
  }

  return (
    <>
      <div className="note">
        <div className="note-header">
          <h3>
            <ArrowLeft onClick={handleSubmit}/>                  
          </h3>
          {id !== 'new'?(
            <button onClick={deleteNote}>Delete</button> 
          ):(
            <button onClick={handleSubmit}>Done</button>
          )}
          
          
        </div>
        <textarea onChange={(e)=>{setNote({...note,'body':e.target.value})}} defaultValue={note?.body}>{}</textarea>
      </div>
    </>
  );
};

export default  NotePage;

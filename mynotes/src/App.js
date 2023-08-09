import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NoteListPage from "./pages/NoteListPage";
import NotePage from "./pages/NotePage";
import { useState } from 'react'


function App() {
  return (
    
    <Router>
      <div className="container dark">
        <div className="app">
          <Header/>
          <Routes>
            <Route exact path="/" element={<NoteListPage/>} />
            <Route exact path="/note/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

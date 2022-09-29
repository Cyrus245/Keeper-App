import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNotes(newNotes) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNotes];
    });
  }

  function deleteNotes(id) {
    setNotes((prevValues) => {
      return prevValues.filter((v, idx) => {
        return idx !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNotes={addNotes} />

      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNotes}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;

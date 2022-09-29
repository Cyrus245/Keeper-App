import React from "react";
import ReactDom from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../Notes";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
    </div>
  );
}

export default App;
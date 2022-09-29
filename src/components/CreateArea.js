import React, { useState } from "react";

function CreateArea(props) {
  const [newNotes, setnewNotes] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setnewNotes((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addNotes(newNotes);
    setnewNotes({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={newNotes.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={newNotes.content}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

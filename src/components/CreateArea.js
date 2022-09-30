import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [newNotes, setnewNotes] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setisExpanded] = useState(false);

  function expanded() {
    setisExpanded(true);
  }

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
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={newNotes.title}
          />
        )}

        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          onChange={handleChange}
          value={newNotes.content}
          onClick={expanded}
        />

        <Zoom in={isExpanded}>
          <Fab onClick={handleSubmit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

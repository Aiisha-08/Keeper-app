import React from "react";

function Note(props) {
  return (
    <div className="note-container">
      <h1>{props.item.title}</h1>
      <p>{props.item.content}</p>
      <button
        className="delete-btn"
        onClick={() => {
          props.deleteItem(props.id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;

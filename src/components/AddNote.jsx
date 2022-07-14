import React, { useState } from "react";

function AddNote(props) {
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="note-container add-container">
      <input
        className="input"
        name="title"
        type="text"
        placeholder="Add Title"
        onChange={handleChange}
        value={data.title}
      />
      <textarea
        className="input"
        name="content"
        placeholder="Add Text"
        onChange={handleChange}
        value={data.content}
      ></textarea>
      <button
        onClick={() => {
          props.addNote(data);
          setData({ title: "", content: "" });
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddNote;

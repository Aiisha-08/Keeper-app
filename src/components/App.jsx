import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddNote from "./AddNote";
import Note from "./Note";

function App() {
  const [dataArr, updateArr] = useState([]);

  function addNote(data) {
    updateArr((preValue) => [...preValue, data]);
  }

  function deleteItem(id) {
    updateArr((preValue) => {
      return preValue.filter((value, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <AddNote addNote={addNote} />
      {dataArr.map((item, index) => {
        return (
          <Note key={index} id={index} item={item} deleteItem={deleteItem} />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

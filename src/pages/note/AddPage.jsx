import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AddNewPageInput from "./components/AddNewPageInput";
import AddNewPageAction from "./components/AddNewPageAction";
import { addNote } from "../../utils/network-data";

const AddPage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleTitleChange = (event) => {
    const { value } = event.target;
    setTitle(value);
  };

  const handleBodyChange = (event) => {
    const { innerHTML } = event.target;
    setBody(innerHTML);
  };

  const handleAddNote = async () => {
    await addNote({ title, body });
    navigate("/");
  };

  return (
    <section className="add-new-page">
      <AddNewPageInput
        title={title}
        titleChange={handleTitleChange}
        inputBody={handleBodyChange}
      />

      <AddNewPageAction addNote={handleAddNote} />
    </section>
  );
};

export default AddPage;

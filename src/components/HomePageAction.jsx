import React from "react";
import { useNavigate } from "react-router-dom";
import { MdAdd } from "react-icons/md";

const HomePageAction = () => {
  const navigate = useNavigate();

  const handleAddNote = () => {
    navigate("/notes/new");
  };

  return (
    <div className="homepage__action">
      <button
        className="action"
        type="button"
        title="tambah"
        onClick={handleAddNote}
      >
        <MdAdd />
      </button>
    </div>
  );
};
export default HomePageAction;

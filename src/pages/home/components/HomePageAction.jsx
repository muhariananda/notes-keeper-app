import React from "react";
import { useNavigate } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import * as routePaths from "../../../utils/routePaths";

const HomePageAction = () => {
  const navigate = useNavigate();

  const handleAddNote = () => {
    navigate(routePaths.ADD_NOTE_PATH);
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

import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import AddNewPageInput from "../components/AddNewPageInput";
import AddNewPageAction from "../components/AddNewPageAction";
import { addNote } from "../utils/local-data";

class AddPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
  }

  handleTitleChange = (event) => {
    const { value } = event.target;
    this.setState({ title: value });
  };

  handleInputBody = (event) => {
    const { innerHTML } = event.target;
    this.setState({ body: innerHTML });
  };

  handleAddNote = () => {
    this.props.addNote(this.state);
  };

  render() {
    return (
      <section className="add-new-page">
        <AddNewPageInput
          title={this.state.title}
          titleChange={this.handleTitleChange}
          inputBody={this.handleInputBody}
        />

        <AddNewPageAction addNote={this.handleAddNote} />
      </section>
    );
  }
}

AddPage.propTypes = {
  addNote: PropTypes.func.isRequired,
};

const AddPageWrapper = () => {
  const navigate = useNavigate();

  function handleAddNote({ title, body }) {
    addNote({ title, body });
    navigate("/");
  }

  return <AddPage addNote={handleAddNote} />;
};

export default AddPageWrapper;
